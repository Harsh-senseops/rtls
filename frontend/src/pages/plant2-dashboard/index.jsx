import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav-bar";
import AreaGraphCard from "../../components/area-graph-card";
import LineGraphCard from "../../components/line-graph-card";
import { checkInCheckOutConfig } from "../../graph-configs/checkInOutConfigs";
import { totalWorkConfigs } from "../../graph-configs/totalWorkConfigs";
import { timeSpentInReworkCOnfigs } from "../../graph-configs/timeSpentInReworkConfigs";
import { avgReworkRecivedConfigs } from "../../graph-configs/avgReworkConfigs";
import { bayEfficiency } from "../../graph-configs/bayEfficency";
import TestingArea from "../../components/testing-area";
import ParkingArea from "../../components/parking-area";
import ParkingSlots from "../../components/parking-slots";
import ExitArea from "../../components/exit-area";
import carIcon from "../../assets/rework-car.png";
import ScannerIcon from "../../assets/icons/scanner-icon";
import ComputerIcon from "../../assets/icons/computer-icon";
import { Plant2Layout } from "../../components/plant-2-layout";
import { bayEfficiencyConfig } from "../../graph-configs/bayEfficiencyConfig";
import ReactApexChart from "react-apexcharts";
import {
  BAY_EFFICIENCY,
  PRODUCTION_COUNT,
  TOTAL_REWORK_COUNT,
  IN_OUT_GRAPH_DATA,
  TOTAL_REWORK_GRAPH_DATE,
  GET_BAY_EFFICIENCY_DATA,
} from "../../api/queries";
import { useQuery, useSubscription } from "urql";
import {
  fromShiftTimeDifference,
  getTodaysDate,
  getTomorrowsDate,
  identifyShift,
  getShiftDate,
  addTimes,
  subtractTimes,
} from "../../utils/utility";
import "./index.css";
import { useSelector } from "react-redux";

let year = new Date().getFullYear();
let date = new Date().getDate();
let month = new Date().getMonth() + 1;

function getFiveEquallySpacedTimes(now) {
  // Calculate the time difference between morning (6:30 AM) and now
  const morning = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    6,
    30,
    0
  );
  const timeDiff = now - morning;

  // Divide the time difference into 5 equal parts
  const timeStep = timeDiff / 5;

  // Generate 5 times from morning to now, spaced equally
  const times = [];
  for (let i = 1; i <= 5; i++) {
    const time = new Date(now - i * timeStep);
    times.push(time.toLocaleTimeString()); // Format as ISO 8601 with milliseconds
  }

  return times;
}

const now = new Date(); // Replace with your actual date object if needed

const fiveTimes = getFiveEquallySpacedTimes(now);
export default function Plant2Dashboard() {
  let [checkInn, setCheckIn] = React.useState(0);
  let [checkOut, setCheckOut] = React.useState(0);
  let [rCount, setRCount] = useState(0);
  let [usageData, setUsageData] = useState([]);
  let [emptyData, setEmptyData] = useState([]);
  let [vehicleEfficiencyData, setVehicleEfficiencyData] = useState([]);
  let [inoutGraphDetails, setInoutGraphDetails] = useState({
    inData: [],
    outData: [],
  });
  let [reworkGraphDetails, setReworkGraphDetails] = useState([]);

  // let [parkingSlots,setParkingSlots] = useState([])

  let data = bayEfficiency(usageData, emptyData);

  let [checkIn, rexCheckIn] = useSubscription({
    query: PRODUCTION_COUNT,
    variables: {
      todaysDate: getTodaysDate(),
      tomorrowsDate: getTomorrowsDate(),
    },
  });
  let [reworkCount, rexReworkCount] = useSubscription({
    query: TOTAL_REWORK_COUNT,
    variables: {
      todaysDate: getTodaysDate(),
      tomorrowsDate: getTomorrowsDate(),
    },
  });
  let [bayEfficiencyy, setBayEfficiency] = useSubscription({
    query: BAY_EFFICIENCY,
    variables: {
      todaysDate: !identifyShift()
        ? getShiftDate("A").startTime
        : getShiftDate("B").startTime,
      tomorrowsDate: !identifyShift()
        ? getShiftDate("A").endTime
        : getShiftDate("B").endTime,
    },
  });

  let [inOutGraph, rexInoutGraph] = useQuery({
    query: IN_OUT_GRAPH_DATA,
    variables: {
      firstStartDate: `${year}-${month}-${date} 05:45:00`,
      firstEndDate: `${year}-${month}-${date} 09:45:00`,
      secondStartDate: `${year}-${month}-${date} 09:45:00`,
      secondEndDate: `${year}-${month}-${date} 12:45:00`,
      thirdStartDate: `${year}-${month}-${date} 12:45:00`,
      thirdEndDate: `${year}-${month}-${date} 15:45:00`,
      fourthStartDate: `${year}-${month}-${date} 15:45:00`,
      fourthEndDate: `${year}-${month}-${date} 18:45:00`,
      fifthStartDate: `${year}-${month}-${date} 18:45:00`,
      fifthEndDate: `${year}-${month}-${date} 23:45:00`,
    },
  });

  let [reworkGraph, rexRework] = useQuery({
    query: TOTAL_REWORK_GRAPH_DATE,
    variables: {
      firstStartDate: `${year}-${month}-${date} 05:45:00`,
      firstEndDate: `${year}-${month}-${date} 09:45:00`,
      secondStartDate: `${year}-${month}-${date} 09:45:00`,
      secondEndDate: `${year}-${month}-${date} 12:45:00`,
      thirdStartDate: `${year}-${month}-${date} 12:45:00`,
      thirdEndDate: `${year}-${month}-${date} 15:45:00`,
      fourthStartDate: `${year}-${month}-${date} 15:45:00`,
      fourthEndDate: `${year}-${month}-${date} 18:45:00`,
      fifthStartDate: `${year}-${month}-${date} 18:45:00`,
      fifthEndDate: `${year}-${month}-${date} 23:45:00`,
    },
  });

  let [vehicleEfficiency, rexVehicleEfficiency] = useQuery({
    query: GET_BAY_EFFICIENCY_DATA,
  });

  useEffect(() => {
    if (checkIn.data) {
      setCheckIn(0);
      setCheckOut(0);
      checkIn.data?.allTagcarMappingTables?.nodes.map((val) => {
        if (val.attatchedTime) {
          setCheckIn((prev) => prev + 1);
        }
        if (val.detachedTime) {
          setCheckOut((prev) => prev + 1);
        }
      });
      rexInoutGraph({ requestPolicy: "cache-and-network" });
    }
  }, [checkIn.data]);

  useEffect(() => {
    if (reworkCount.data) {
      setRCount(reworkCount.data.allVehicleTrackingReworks.nodes.length);
    }
  }, [reworkCount.data]);

  useEffect(() => {
    if (bayEfficiencyy.data) {
      let tempObj = {
        usage: Array(6).fill(0),
        empty: Array(6).fill(fromShiftTimeDifference()),
      };
      let sorted = bayEfficiencyy.data.allVehicleTrackingReworks.nodes.sort(
        (a, b) => a.bayNo - b.bayNo
      );
      sorted.forEach((val) => {
        const endTime = val.endTime ? new Date(val.endTime) : new Date();
        const startTime = new Date(val.startTime);
        const timeDiff = endTime - startTime;
        const totalSeconds = Math.floor(timeDiff / 1000);
        const customMinuteDiff = Math.floor(timeDiff / (1000 * 60));
        const remainingSeconds = totalSeconds % 3600;
        const hours = Math.floor(customMinuteDiff / 60);
        const minutes = Math.floor(customMinuteDiff % 60);
        const seconds = remainingSeconds % 60;
        tempObj.usage[val.bayNo - 1] = addTimes(
          tempObj.usage[val.bayNo - 1],
          `${hours}:${minutes}:${seconds}`
        );
      });
      for (let i = 0; i < tempObj.usage.length; i++) {
        tempObj.empty[i] = subtractTimes(tempObj.empty[i], tempObj.usage[i]);
      }
      function formatTimeElement(timeElement) {
        // Parse the time string to get hours, minutes, and seconds
        const [hours, minutes, seconds] = timeElement.split(":").map(Number);

        // Format the time components as HH:mm:ss
        const formattedTimeElement = `${String(hours).padStart(
          2,
          "0"
        )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
          2,
          "0"
        )}`;

        return formattedTimeElement;
      }

      for (let i = 0; i < tempObj.usage.length; i++) {
        if (tempObj.usage[i] === 0) {
          continue;
        }
        tempObj.usage[i] = formatTimeElement(tempObj.usage[i]);
      }
      setUsageData(
        tempObj.usage.map((val) => {
          if (typeof val === "string") {
            if (val.length > 3) {
              if (val.length === 6) {
                let newVal = val.replace(":", ".").slice(0, 4);
                return Number(newVal);
              }
              if (val.length === 8 || val.length === 7) {
                let newVal = val.replace(":", ".").slice(0, 5);
                return Number(newVal);
              }
              if (val.length === 5) {
                let newVal = val.replace(":", ".0").slice(0, 4);
                return Number(newVal);
              }
            }

            return Number(val.replace(":", "."));
          }
          return 0;
        })
      );

      setEmptyData(
        tempObj.empty.map((val) => {
          if (typeof val === "string") {
            if (val.length === 3) {
              return Number(val.replace(":", ".0"));
            }
            return Number(val.replace(":", "."));
          }
          return 0;
        })
      );
      rexRework({ requestPolicy: "cache-and-network" });
    }
  }, [bayEfficiencyy.data]);

  useEffect(() => {
    if (inOutGraph.data) {
      let inOutTempArray = { inData: [], outData: [] };
      let keys = Object.keys(inOutGraph.data);
      keys.map((key, i) => {
        if (i <= 4) {
          inOutTempArray.inData.push(inOutGraph.data[key].nodes.length);
        } else {
          inOutTempArray.outData.push(inOutGraph.data[key].nodes.length);
        }
      });
      setInoutGraphDetails(inOutTempArray);
    }
  }, [inOutGraph.data]);

  useEffect(() => {
    if (reworkGraph.data) {
      let tempArray = [];
      let keys = Object.keys(reworkGraph.data);
      keys.map((key) => {
        tempArray.push(reworkGraph.data[key].totalCount);
      });
      setReworkGraphDetails(tempArray);
    }
  }, [reworkGraph.data]);

  useEffect(() => {
    if (vehicleEfficiency.data) {
      let data = vehicleEfficiency.data?.getBayEfficency?.map((val) => [
        new Date(val.day_date).getTime() + 3600000 * 6,
        Number(val.spenthr.toFixed(2)),
      ]);
      console.log(vehicleEfficiency.data);
      if (data) {
        data.sort((a, b) => a[0] - b[0]);
        var tomorrowTimestamp = new Date().setHours(0, 0, 0, 0) + 86400000;
        var originalTimestamp = data[0][0]; // The original timestamp
        var oneDayInMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
        var newTimestamp = originalTimestamp - oneDayInMilliseconds;
        data.unshift([newTimestamp, 0]);
        data.push([tomorrowTimestamp, 0]);
        console.log(data, "fdsaflkja");
        setVehicleEfficiencyData(data);
      }
    }
  }, [vehicleEfficiency.data]);

  useEffect(() => {}, []);

  return (
    <>
      <NavBar />
      <main>
        <Plant2Layout />
        {/*End of layout Dont Remove */}
        <br />
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "2%",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "2%",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div className="bg-theme" style={{ width: "48%" }}>
                <AreaGraphCard
                  configs={checkInCheckOutConfig(
                    inoutGraphDetails.inData,
                    inoutGraphDetails.outData
                  )}
                  count1={checkOut.toString()}
                  count2={checkInn.toString()}
                  title="Total CheckOut & CheckIn"
                />
              </div>
              <div className="bg-theme" style={{ width: "48%" }}>
                <AreaGraphCard
                  configs={totalWorkConfigs(reworkGraphDetails)}
                  count1={rCount}
                  title="Total Rework"
                />
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "2%",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2%",
            marginTop: "2%",
            flexWrap: "nowrap",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div className="bg-theme" style={{ width: "48%" }}>
            <h1 style={{ textAlign: "center" }}>Bay Usage/Vacant</h1>
            <ReactApexChart
              options={data.options}
              series={data.series}
              type="bar"
              height={350}
              width="100%"
            />
          </div>
          <div className="bg-theme" style={{ width: "48%" }}>
            <h1 style={{ textAlign: "center" }}>Bay Efficiency</h1>
            <ReactApexChart
              options={bayEfficiencyConfig(vehicleEfficiencyData).options}
              series={bayEfficiencyConfig(vehicleEfficiencyData).series}
              type="area"
              height={350}
              width="100%"
            />
          </div>
        </div>
      </main>
    </>
  );
}
