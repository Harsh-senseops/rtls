import React from "react";
import "./index.css";
import NavBar from "../../../components/nav-bar";
import TestingArea from "../../../components/testing-area";
import ReactApexChart from "react-apexcharts";
import { exportReworkConfig } from "../../../graph-configs/exportReworkConfig";
import LineGraphCard from "../../../components/line-graph-card";
import { alarmGraphConfig } from "../../../graph-configs/alarmGraphConfig";
let data = [
  {Shifts:["A","B","C"]}

]
export default function TestingAndReworkArea() {
  return (
    <>
      <NavBar />
      <main>
        <div
          style={{
            width: "99.99%",
            height: "auto",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div style={{ width: "49%", }}>
            <TestingArea />
          </div>
          <div
            className="bg-theme"
            style={{
              width: "49%",
              flexDirection: "column",
              alignItems: "center",
              background: "#202125",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1 className="p-header">PRODUCTION</h1>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                padding:"2%",
              }}
            >
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2
                  className="tp"
                  style={{ width: "95%", textAlign: "center",marginTop:"10px" }}
                >
                  Total Punch
                </h2>
                <div
                  className="tp"
                  style={{
                    fontSize: "600%",
                    width: "95%",
                    textAlign: "center",
                  }}
                >
                  <span>200</span>
                </div>
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2
                  className="rw"
                  style={{ width: "95%", textAlign: "center",marginTop:"10px" }}
                >
                  Rework
                </h2>
                <div
                  className="rw"
                  style={{
                    fontSize: "600%",
                    width: "95%",
                    textAlign: "center",
                  }}
                >
                  <span>29</span>
                </div>
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2
                  className="dp"
                  style={{ width: "95%", textAlign: "center",marginTop:"10px" }}
                >
                  Dispatch
                </h2>
                <div
                  className="dp"
                  style={{
                    fontSize: "600%",
                    width: "95%",
                    textAlign: "center",
                  }}
                >
                  <span>100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "99.99%",
            height: "auto",
            display: "flex",
            marginTop: "1em",
            justifyContent: "space-around",
          }}
        >
         <div className="bg-theme" style={{width:"49%"}}>
         <div className="dwd-text">
              <span>Export Rework</span>
            </div>
            <ReactApexChart options={exportReworkConfig.options} series={exportReworkConfig.series} type="bar" height={350}/>
         </div>
         <div className="bg-theme dwd-container" style={{width:"49%"}}>
          <div className="dwd-text">
            <span>Day-Wise Details</span>
          </div>
          <div className="dwd-info">
            <div className="dwd-info-child">
              <span style={{fontSize:"1.8rem"}}>Shifts</span>
              <span style={{fontSize:"1.8rem"}}>A</span>
              <span style={{fontSize:"1.8rem"}}>B</span>
              <span style={{fontSize:"1.8rem"}}>C</span>
            </div>
            <hr/>
            <div className="dwd-info-child">
              <span>Total check-in</span>
              <span>75</span>
              <span>75</span>
              <span>75</span>
            </div>
            <hr/>
            <div className="dwd-info-child">
              <span>Export check-in</span>
              <span>75</span>
              <span>75</span>
              <span>75</span>
            </div>
            <hr/>
            <div className="dwd-info-child">
              <span>Total Rework</span>
              <span>75</span>
              <span>75</span>
              <span>75</span>
            </div>
            <hr/>
            <div className="dwd-info-child">
              <span>VIP Rework</span>
              <span>75</span>
              <span>75</span>
              <span>75</span>
            </div>
          </div>
         </div>
        </div>
        <div style={{
            width: "99.99%",
            height: "auto",
            display: "flex",
            marginTop: "1em",
            justifyContent: "space-around",
          }}>
            <div className="bg-theme" style={{width:"49%"}}>
            <div className="dwd-text">
              <span>Alarm Graph</span>
            </div>
            <LineGraphCard config={alarmGraphConfig}/>

            </div>
            <div className="bg-theme" style={{width:"49%"}}>
            <div className="dwd-text">
            <span>Rework Alloction</span>
          </div>
            <LineGraphCard config={alarmGraphConfig}/>

            </div>
        </div>

      </main>
    </>
  );
}
