import React from "react";
import "./index.css";
import anchors from "../../assets/anchors.png";

export default function ParkingArea() {
  return (
    <div className="parking-area-container">
      <div className="parking-slots">
        <div className="first-parking-slot" style={{ marginTop: "1.4%" }}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span>Parking Area</span>
        <div className="first-parking-slot">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="road-container">
        <div id="road-1">
          <img src={anchors} alt="" />
          <img src={anchors} alt="" />
          <img src={anchors} alt="" />
        </div>
        <div id="road-2">
          <img src={anchors} alt="" />
          <img src={anchors} alt="" />
          <img src={anchors} alt="" />
        </div>
      </div>
    </div>
  );
}
