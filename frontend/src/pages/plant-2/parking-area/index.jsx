import React from "react";
import NavBar from "../../../components/nav-bar";
import ParkingArea from "../../../components/parking-area";
import "./index.css";
import ReactApexChart from "react-apexcharts";
import { parkingDayWiseConfig } from "../../../graph-configs/parkingDayWiseConfigs";
import Footer from "../../../components/footer";
import { IN_OUT_COUNT } from "../../../api/queries";
import { useSubscription } from "urql";

export default function ParkingAreaPage() {
    let date = new Date();
    let fullDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    let [inOutCountQuery,rexInOutCountQuery] = useSubscription({
        query:IN_OUT_COUNT,
        variables:{date:`${fullDate}`}
        })
    let [inCount,setInCount] = React.useState(0);
    let [outCount,setOutCount] = React.useState(0)
    React.useEffect(()=>{
        if(inOutCountQuery.data){
            setInCount(0);
            setOutCount(0);
            console.log("amigo")
            inOutCountQuery.data?.allTagLiveLocationParkingareas?.nodes.map((val)=>{
               if(val.starttime){
                setInCount(prev=>prev + 1)
               }
               if(val.endtime){
                setOutCount(prev=>prev + 1)
               }
            })
        }
    },[inOutCountQuery.data])
  return (
    <>
      <NavBar />
      <main>
        <div className="parking-first-row">
          <div className="pa-layout bg-theme">
            <ParkingArea />
          </div>
          <div className="bg-theme dwd-container" style={{ width: "49%" }}>
            <div className="dwd-text">
              <span>Day-Wise</span>
            </div>
            <div className="dwd-info">
              <div className="dwd-info-child">
                <span>Shifts</span>
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </div>
              <hr />
              <div className="dwd-info-child">
                <span>Total Bay</span>
                <span>75</span>
                <span>75</span>
                <span>75</span>
              </div>
              <hr />
              <div className="dwd-info-child">
                <span>Occupied</span>
                <span>75</span>
                <span>75</span>
                <span>75</span>
              </div>
              <hr />
              <div className="dwd-info-child">
                <span>Free</span>
                <span>75</span>
                <span>75</span>
                <span>75</span>
              </div>
            </div>
          </div>
        </div>
        <div className="parking-second-row">
          <div className="pa-dwd-graph-container bg-theme">
          <div className="dwd-text">
              <span>Day Wise Details.</span>
            </div>
            <ReactApexChart
              options={parkingDayWiseConfig(inCount,outCount,fullDate).options}
              series={parkingDayWiseConfig(inCount,outCount,fullDate).series}
              type="bar"
            />
          </div>
          <div className="pa-dwd-graph-container bg-theme">
          <div className="dwd-text">
              <span>Current Vehicle Data</span>
            </div>
            <ReactApexChart
              options={parkingDayWiseConfig(5,5,fullDate).options}
              series={parkingDayWiseConfig(5,5,fullDate).series}
              type="bar"
            />
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}
