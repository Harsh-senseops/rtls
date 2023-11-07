import React from "react";
import NavBar from "../../components/nav-bar";
import AreaGraphCard from "../../components/area-graph-card";
import LineGraphCard from "../../components/line-graph-card";
import { checkInCheckOutConfig } from "../../graph-configs/checkInOutConfigs";
import { totalWorkConfigs } from "../../graph-configs/totalWorkConfigs";
import { timeSpentInReworkCOnfigs } from "../../graph-configs/timeSpentInReworkConfigs";
import { avgReworkRecivedConfigs } from "../../graph-configs/avgReworkConfigs";
import { bayEfficiency } from "../../graph-configs/bayEffiencyConfigs";
import TestingArea from "../../components/testing-area";
import ParkingArea from "../../components/parking-area";
import ExitArea from "../../components/exit-area";
export default function Plant2Dashboard() {
    let data = bayEfficiency("fasdf")
  return (
    <>
      <NavBar />
      <main>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              width: "50%",
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
              }}
            >
              <div className="bg-theme" style={{ width: "48%" }}>
                <AreaGraphCard
                  configs={checkInCheckOutConfig}
                  count1="250"
                  count2="120"
                  title="Total Check In & Checkout"
                />
              </div>
              <div className="bg-theme" style={{ width: "48%" }}>
                <AreaGraphCard
                  configs={totalWorkConfigs}
                  count1="60"
                  title="Total Work"
                />
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "2%",
                marginTop: "2%",
              }}
            >
              <div className="bg-theme" style={{ width: "48%" }}>
                <AreaGraphCard
                  configs={timeSpentInReworkCOnfigs}
                  count1="6"
                  title="Time Spent In Rework (hr)"
                />
              </div>
              <div className="bg-theme" style={{ width: "48%" }}>
                <AreaGraphCard
                  configs={avgReworkRecivedConfigs}
                  count1="20%"
                  title="Average Rework Received"
                />
              </div>
            </div>
          </div>
          <div className="bg-theme" style={{ width: "50%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"flex-end",padding:"0.5em",position:"relative" }}>
            <div style={{width:"55%",height:"55%",marginBottom:"4%"}}>
                <ParkingArea/>
            </div>
            <div className="" style={{width:"40%",height:"40%",alignSelf:"flex-end",justifySelf:"flex-end"}}>
                <TestingArea/>
            </div>
            <div className="" style={{width:"30%",height:"40%",alignSelf:"flex-end",justifySelf:"flex-end",background:"#f7eac6",position:"absolute",left:"1%",}}>
                <ExitArea/>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2%",
            marginTop: "2%",
            flexWrap: "nowrap",
            width: "100%",
          }}
        >
          <div className="bg-theme" style={{ width: "32%" }}>
            <LineGraphCard config={bayEfficiency("Bay - Effiency")} />
          </div>
          <div className="bg-theme" style={{ width: "32%" }}>
            <LineGraphCard config={bayEfficiency("Vehicle Handling Efficiency")}/>
          </div>
          <div className="bg-theme" style={{ width: "32%" }}>
            <LineGraphCard config={bayEfficiency("Repair Handling Efficiency")}/>
          </div>
        </div>
      </main>
    </>
  );
}
