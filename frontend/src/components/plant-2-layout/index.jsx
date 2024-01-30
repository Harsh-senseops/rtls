import React from "react";
import carIcon from "../../assets/w-car.png";
import ScannerIcon from "../../assets/icons/scanner-icon";
import ComputerIcon from "../../assets/icons/computer-icon";
import { useSelector } from "react-redux";
import LongArrow from "../../assets/icons/long-arrow";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setNavbarDropDownIndex,
  setNavbarDropDownChildIndex,
} from "../../redux-slices/navbar";
export function Plant2Layout() {
  let parkingStore = useSelector((store) => {
    return store.timers.parkingSlots.noOfSlots;
  });

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let repairSlot = useSelector((store) => {
    return store.timers.repairHospital.repairSlotData;
  });

  let navigateToParking = () => {
    dispatch(setNavbarDropDownIndex(0));
    dispatch(setNavbarDropDownChildIndex(2));
    navigate("/plant2/parking-area");
    localStorage.setItem("p", 0);
    localStorage.setItem("c", 2);
  };

  let navigateToRepairHospital = () => {
    dispatch(setNavbarDropDownIndex(0));
    dispatch(setNavbarDropDownChildIndex(1));
    navigate("/plant2/weld-repair-area");
    localStorage.setItem("p", 0);
    localStorage.setItem("c", 1);
  };
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        height: "87vh",
        width: "100%",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        color: "black",
        backgroundColor: "#b7b7a4",
      }}
    >
      {/* Parking layout */}
      <div className="d-road-1">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="d-road-2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="d-parking-layout">
        <div className="d-parking-slots-container">
          <div className="d-parking-slots">
            <span style={{ cursor: "pointer" }} onClick={navigateToParking}>
              Parking Area
            </span>

            {parkingStore.length === 0
              ? "Loading..."
              : parkingStore.map((val, i) => {
                  return (
                    <div
                      className="d-slots"
                      style={{
                        background: val.isOccupied
                          ? "rgb(0 194 255)"
                          : "#adb5bd",
                      }}
                    ></div>
                  );
                })}
          </div>
        </div>
        <div className="unknown-layout-1 align-items">Resin Shop</div>
        <div className="d-parking2-layout align-items">
          <span>CNG Area</span>
        </div>
        <div className="unknown-layout-2">
          <div className="unknown-layout-2-child-1 align-items">
            Resin Beside Bays
          </div>
          <div className="unknown-layout-2-child-2 align-items">
            Bumper Shop
          </div>
        </div>
      </div>
      {/* f-inspection-road */}

      {/* first layer */}
      <div className="d-first-layer">
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "55%",
            zIndex: "5",
            transform: "rotate(180deg)",
          }}
        >
          <LongArrow />
        </div>

        <div className="d-fuel-inspection-road">
          <span>Rope Road</span>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div className="road-pattern">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="d-first-layer-child">
          <div className="d-kaku-exp">
            <div className="d-c-kaku align-items">KAKU Area</div>
            <div className="d-c-exp align-items">Exp TT Waiting veh</div>
          </div>
          <div className="d-dif-bays">
            <div className="d-bay-layer-1">
              <div className="d-weld-area">
                <span
                  className="navigation-buttons"
                  onClick={navigateToRepairHospital}
                >
                  Weld Repair
                </span>
                {repairSlot &&
                  repairSlot.map((val) => {
                    return (
                      <div className="d-weld-area-slots">
                        {!val.isEmpty && <img src={carIcon} />}
                      </div>
                    );
                  })}
                <div className="d-four-post">
                  <div></div>
                </div>
              </div>

              <div
                className="d-repair-bay-area align-items"
                style={{ position: "relative" }}
              >
                <span>Paint Repair</span>

                <div
                  className=""
                  style={{
                    width: "15%",
                    height: "100%",
                    backgroundColor: "#808080",
                    position: "absolute",
                    right: "0px",
                  }}
                ></div>
              </div>
              <div className="d-unknown-bays align-items"></div>
            </div>
            <div
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                transform: "rotate(180deg)",
              }}
            >
              <LongArrow />
              <LongArrow />
              <LongArrow />
            </div>
            <div className="d-bay-layer-2">
              <span style={{ position: "absolute", zIndex: "3" }}>
                Assy Repair
              </span>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <LongArrow />
              <LongArrow />
              <LongArrow />
            </div>
          </div>
        </div>
      </div>
      <div className="d-function">
        <div className="d-function-c">
          <div className="func-1 align-items">
            Function 01
            <div style={{ position: "absolute", left: "11%" }}>
              <LongArrow />
            </div>
          </div>
          <div className="func-2 align-items">
            Function 02
            <div style={{ position: "absolute", left: "11%" }}>
              <LongArrow />
            </div>
          </div>
        </div>
        <hr />
        <div className="shower-line align-items">
          <span style={{ position: "absolute", top: "16%", fontSize: "90%" }}>
            Shower Line 01
          </span>
          {/* <span style={{ position: "relative", zIndex: "2" }}>Shower Line</span> */}
          <span
            style={{ position: "absolute", bottom: "16%", fontSize: "90%" }}
          >
            Shower Line 02
          </span>
        </div>
      </div>
      <div className="d-trim-inspection align-items">Trim Inspection</div>
      <div className="final-inspection-line">
        <div className="top-box"></div>
        <div className="middle-box align-items">Final Insp Line</div>
        <div className="bottom-box"></div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "1px",
          right: "35%",
          border: "1px solid black",
          padding: "0.1em",
        }}
      >
        <ScannerIcon size="1.3em" />
        <ComputerIcon size="1.3em" />
      </div>
    </div>
  );
}
