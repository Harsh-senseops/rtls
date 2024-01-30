import React, { useEffect } from "react";
import "./index.css";
import ScannerIcon from "../../assets/icons/scanner-icon";
import ComputerIcon from "../../assets/icons/computer-icon";
import achorIcon from "../../assets/anchors.png";
import carIcon from "../../assets/car.png";
import shipIcon from "../../assets/ship.png";

export default function TestingArea() {
  const [timer, setTimer] = React.useState(1);
  const length = 6;
  const dynamicArray = Array.from({ length }, (_, index) => index + 1);
  // const dynamicArray = [{isOccupied:true,vehicleRunTime:}];
  useEffect(() => {
    let hours = 0;
    let minutes = 0;

    let startTimer = setInterval(() => {
      minutes = minutes + 1;
      if (minutes === 60) {
        minutes = 0;
        hours = hours + 1;
      }
      setTimer(`${hours}:${String(minutes).padStart(2, "0")}`);
    }, 1000);
    return () => {
      clearInterval(startTimer);
    };
  }, []);

  return (
    <div className="ta-container">
      <div className="rw-bay">
        <div className="rw-bay-1">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="rw-bay-2" style={{ color: "black" }}>
          <img
            src={achorIcon}
            width="6%"
            style={{ position: "absolute", left: "-3%", top: "-11%" }}
            height="30%"
            alt=""
          />
          <img
            src={achorIcon}
            width="6%"
            style={{ position: "absolute", right: "-3%", top: "-11%" }}
            height="30%"
            alt=""
          />
          <img
            src={achorIcon}
            width="6%"
            style={{ position: "absolute", left: "-3%", bottom: "-11%" }}
            height="30%"
            alt=""
          />
          <img
            src={achorIcon}
            width="6%"
            style={{ position: "absolute", right: "-3%", bottom: "-11%" }}
            height="30%"
            alt=""
          />
          {dynamicArray.map((val) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  position: "relative",
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <span>Repairing Bay</span>
      <div className="empty-space"></div>
      <span>Testing Area</span>
      <div className="ta">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="scanner-station">
        <div className="scanner-station-wrapper bg-theme">
          <ScannerIcon size="80%" />

          <ComputerIcon size="80%" />
        </div>
      </div>
    </div>
  );
}
