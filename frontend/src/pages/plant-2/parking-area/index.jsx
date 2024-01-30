import React from "react";
import NavBar from "../../../components/nav-bar";
import ParkingArea from "../../../components/parking-area";
import "./index.css";
import ReactApexChart from "react-apexcharts";
import { parkingDayWiseConfig } from "../../../graph-configs/parkingDayWiseConfigs";
import { exportReworkConfig } from "../../../graph-configs/exportReworkConfig";
import Footer from "../../../components/footer";
import { parkingCurrentVehicaleData } from "../../../graph-configs/parkingCurrentVehicleConfigs";
import { IN_OUT_COUNT, PARKING_DAY_WISE_DETAILS } from "../../../api/queries";
import { useSubscription } from "urql";
import ParkingSlots from "../../../components/parking-slots";

export default function ParkingAreaPage() {
  let date = new Date();
  let fullDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  let [inOutCountQuery, rexInOutCountQuery] = useSubscription({
    query: IN_OUT_COUNT,
    variables: { date: `${fullDate}` },
  });
  let [pDayWiseDetails, resPDayWiseDetails] = useSubscription({
    query: PARKING_DAY_WISE_DETAILS,
  });
  let [inCount, setInCount] = React.useState(0);
  let [outCount, setOutCount] = React.useState(0);
  let [pdaywise, setPDayWise] = React.useState(null);
  React.useEffect(() => {
    if (inOutCountQuery.data) {
      setInCount(0);
      setOutCount(0);
      inOutCountQuery.data?.allTagLiveLocationParkingareas?.nodes.map((val) => {
        if (val.starttime) {
          setInCount((prev) => prev + 1);
        }
        if (val.endtime) {
          setOutCount((prev) => prev + 1);
        }
        console.log(inCount,outCount)
      });
    }
  }, [inOutCountQuery.data]);

  React.useEffect(() => {
    if (pDayWiseDetails.data) {
      let tempArray = { vin: [], time: [] };
      pDayWiseDetails.data?.allTagLiveLocationParkingareas.nodes.forEach(
        (element) => {
          const endTime = new Date();
          const startTime = new Date(element.starttime);
          const timeDiff = endTime - startTime;
          const customMinuteDiff = Math.floor(timeDiff / (1000 * 60));
          const hours = Math.floor(customMinuteDiff / 60);
          const minutes = Math.floor(customMinuteDiff % 60);
          console.log(hours,minutes)
          tempArray.time.push(Number(`${hours}.${minutes}`));
          tempArray.vin.push(element?.tagcarMappingTableByMappid?.vinId.slice(-5));
        }
      );

      setPDayWise(tempArray);
      console.log(pdaywise)
    }
  }, [pDayWiseDetails.data]);
  return (
    <>
      <NavBar />
      <main>
        <div className="parking-first-row">
          <div className="pa-layout bg-theme">
            <ParkingSlots />
          </div>
        </div>
        <div className="parking-second-row">
          <div className="pa-dwd-graph-container bg-theme">
            <div className="dwd-text">
              <span>Day Wise Details.</span>
            </div>
            <ReactApexChart
              options={
                parkingDayWiseConfig(inCount, outCount, fullDate).options
              }
              series={parkingDayWiseConfig(inCount, outCount, fullDate).series}
              type="bar"
            />
          </div>
          <div className="pa-dwd-graph-container bg-theme">
            <div className="dwd-text">
              <span>Current Vehicle Data</span>
            </div>
            {pdaywise && (
              <ReactApexChart
                options={
                  parkingCurrentVehicaleData(
                    "Current Vehicle data",
                    pdaywise.time,
                    pdaywise.vin
                  ).options
                }
                series={
                  parkingCurrentVehicaleData(
                    "Current Vehicle data",
                    pdaywise.time,
                    pdaywise.vin
                  ).series
                }
                type="bar"
              />
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
