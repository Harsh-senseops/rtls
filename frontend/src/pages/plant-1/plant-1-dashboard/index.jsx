import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./index.css";
import layout from "../../../assets/layout.png";
import NavBar from "../../../components/nav-bar";
import { useSubscription, useQuery } from "urql";
import zon1Config from "../../../graph-configs/zone1Config";
import RepairPaintBay from "../../../components/repair-paint-bay";
const MAX_X_Y_AXIS = `query MyQuery {
    getMaxAnchorValues
  }
  `;

const LAST_TAG_LIVE_LOCATION = `
subscription allTagLiveLocationNewzones {
  allTagLiveLocationNewzones(
    first: 1
    orderBy: DATETIME_DESC
  ) {
    nodes {
      mapId
      xAxis
      yAxis
      datetime
    }
  }
}
`;

const REPAIR_BAY = `subscription allTagLiveLocationNewzones {
    allTagLiveLocationRepairareas {
      nodes {
        bay1
        bay2
        bay3
        bay4
        bay5
        bay6
        id
      }
    }
  }
  `;
const EMPTY_BAY_COLOR = "#ede0d4";
const FULL_BAY_COLOR = "#4f772d";

export default function Plant1Dashboard() {
  let [axisData, setAxisData] = React.useState(null);
  let [maxXandY, setMaxXandY] = React.useState(null);
  let [res, rezRes] = useSubscription({
    query: LAST_TAG_LIVE_LOCATION,
  });
  let [maxXAndYQuery, rexMaxXAndYQuery] = useQuery({
    query: MAX_X_Y_AXIS,
  });
  const [repairBay, rexRepairBay] = useSubscription({
    query: REPAIR_BAY,
  });
  let [repairSlot, setRepairSlot] = useState(null);
  // Tag Live location
  useEffect(() => {
    if (res.data) {
      setAxisData({
        x: res.data.allTagLiveLocationNewzones?.nodes[0]?.xAxis,
        y: res.data.allTagLiveLocationNewzones?.nodes[0]?.yAxis,
      });
      console.log("I ran")
    }
  }, [res.data]);
  useEffect(() => {
    if (maxXAndYQuery.data) {
      let data = JSON.parse(maxXAndYQuery.data.getMaxAnchorValues)[0];
      Math.floor(5.34);
      setMaxXandY({
        x: Math.floor(data.max_x_axis),
        y: Math.floor(data.max_y_axis),
      });
    }
  }, [maxXAndYQuery.data]);

  useEffect(() => {
    if (repairBay.data) {
      let data = repairBay.data.allTagLiveLocationRepairareas.nodes[0]
      let tempArray = [];
      for (let i in data) {
        if (i === "id") continue;
        if (data[i] === 1) {
          tempArray.push({ bayName: i, background: FULL_BAY_COLOR });
        } else if (data[i] === 0) {
          tempArray.push({ bayName: i, background: EMPTY_BAY_COLOR });
        }
      }
     
      setRepairSlot(tempArray);
    }
  }, [repairBay.data]);
  return (
    <>
      <NavBar />
      <main>
        {axisData && maxXandY ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "500px",
                height: "500px",
                position: "relative",
                background: "#E4CDA7",
              }}
            >
              <ReactApexChart
                height="100%"
                width="100%"
                options={
                  zon1Config(axisData.x, axisData.y, maxXandY.x, maxXandY.y)
                    .options
                }
                series={
                  zon1Config(axisData.x, axisData.y, maxXandY.x, maxXandY.y)
                    .series
                }
                type="scatter"
              />
            </div>
          </div>
        ) : (
          "Loading..."
        )}
        <h1 style={{ textAlign: "center" }}>Paint Repair Bay</h1>
        <div className="repair-bay-container">
          {repairSlot
            ? repairSlot.map((val) => {
                return (
                  <div className="child" style={{ background: val.background,textShadow: '2px 2px 2px #ff8fab' }}>
                    {val.bayName.toUpperCase()}
                  </div>
                );
              })
            : "LOADING..."}
        </div>
      </main>
    </>
  );
}
