import React from "react";
import "./index.css";
import ScannerIcon from "../../assets/icons/scanner-icon";
import ComputerIcon from "../../assets/icons/computer-icon";
import achorIcon from "../../assets/anchors.png";

export default function TestingArea() {
  return (
    <div className="ta-container">
      <div className="rw-bay">
        <div className="rw-bay-1">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="rw-bay-2">
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

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
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
        <ScannerIcon size="80%"/>
        
            <ComputerIcon size="80%" />
        </div>
      </div>
    </div>
  );
}
