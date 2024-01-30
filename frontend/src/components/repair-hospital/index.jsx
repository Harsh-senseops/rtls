import React from "react";
import "./index.css";
import { useEffect, useState, useRef } from "react";
import carIcon from "../../assets/rework-car.png";
import shipIcon from "../../assets/ship.png";
import { REPAIR_BAY, START_TIMER, GET_ALL_TIMER } from "../../api/queries";
import { useMutation, useQuery, useSubscription } from "urql";
import CustomModal from "../custom-modal";
import CustomTable from "../custom-table";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Loader from "../loader";
import PriorityPinIcon from "../../assets/icons/priority-pin-icon";

const NETWORK_ERROR_MESSAGE = "Network Error.";
const INCORRECT_VIN_NUMBER_MESSAGE = "Incorrect Vin Number";
const NO_RECORDS_FOUND_MESSAGE = "No records found.";

const fetchVdemData = async (url) => {
  let tempArray = [];
  await fetch(`http://192.168.242.207:94/DefectData/GetVehicleDefectList?vinNumber=${url}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      data.defectList?.map((val) => {
        // Specify the properties you want to remove
        const propertiesToRemove = ["defectCategory", "photo"];

        // Destructure the object excluding the specified properties
        const {
          [propertiesToRemove[0]]: removedProperty1,
          [propertiesToRemove[1]]: removedProperty2,
          ...rest
        } = val;

        // Create a new object without the specified properties
        const modifiedObject = { ...rest };

        // Get keys and values from the modified object
        const keys = Object.keys(modifiedObject);
        const values = Object.values(modifiedObject);

        // Push the modified object to tempArray
        tempArray.push({ keys, values });
      });

      if (data.returnMessage === INCORRECT_VIN_NUMBER_MESSAGE) {
        tempArray = INCORRECT_VIN_NUMBER_MESSAGE;
      }
      if (data.returnMessage === NO_RECORDS_FOUND_MESSAGE) {
        tempArray = NO_RECORDS_FOUND_MESSAGE;
      }
    })
    .catch(
      (error) => (tempArray = NETWORK_ERROR_MESSAGE + JSON.stringify(error))
    );
  return tempArray;
};

export default function RepairHospital() {
  const [vdemData, setVdemData] = React.useState(null);
  // const [timers, setTimers] = useState(null);
  const [vinId, setVinId] = useState("");
  const [paintRepairBay, rexPaintRepairBay] = useSubscription({
    query: REPAIR_BAY,
  });
  const [open, setOpen] = React.useState(false);
  const [allTimers, rexAllTimers] = useQuery({
    query: GET_ALL_TIMER,
  });
  const [resStartTimer, startTimer] = useMutation(START_TIMER);

  let repairSlot = useSelector((store)=>{
    return store.timers.repairHospital.repairSlotData
})
let timers = useSelector((store)=>{
  return store.timers.repairHospital.timers
})

  const onClickOpenModal = (i) => {
    fetchVdemData(repairSlot[i].vinId)
      .then((data) => {
        setVdemData(data);
      })
      .catch((error) => console.log(error));
    setOpen(true);
  };

  const onClickCloseModal = () => {
    setOpen(false);
  };

  function returnData() {
    if (vdemData === NO_RECORDS_FOUND_MESSAGE) {
      return <h1>{vdemData}</h1>;
    }
    if (vdemData === INCORRECT_VIN_NUMBER_MESSAGE) {
      return <h1>{vdemData}</h1>;
    }
    if (vdemData.includes(NETWORK_ERROR_MESSAGE)) {
      return <h1>{vdemData}</h1>;
    }
    if (vdemData.length === 0) {
      return <h1>Something went wrong.</h1>;
    }
    return <CustomTable vdemData={vdemData} onClick={() => setOpen(false)} />;
  }

  return (
    <div className="rh-container bg-theme">
      {repairSlot ? (
        repairSlot.map((val, i) => {
          return (
            <div
              style={{
                width: "16%",
                display: "flex",
                justifyContent: "center",
                height: "60%",
                background: "#3d3d3d !important",
                position: "relative",
              }}
              // className="bay-car-container"
              className="bg-theme"
            >
              <div
                style={{
                  position: "absolute",
                  top: "-30%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  // color:"#fffec4",
                  color: "#ff6969",
                  // background: "#ddffbb",
                  width: "100%",
                }}
                className="bay-usage-container"
                // className="bg-theme"
              >
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Bay Usage
                </span>
                <span style={{ fontSize: "1.8rem", fontWeight: "bolder" }}>
                  {timers ? timers[i].usageTimer : "00:00"}
                </span>
              </div>
              {!val.isEmpty ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    position:"relative"
                  }}
                >
                  <div style={{position:"absolute",left:"10px",top:"5px"}}>
                 {val.ispriority && <PriorityPinIcon size="1.5em"/>}
                  </div>
                  
                 
                  <span>{val.tagId}</span>
                  <img className="carIcon" src={carIcon} />
                  <span
                    className="rh-vin-number"
                    onClick={() => onClickOpenModal(i)}
                  >
                    {val.vinId}
                  </span>
                </div>
              ) : (
                ""
              )}
              {val.isexport ? (
                <img
                  src={shipIcon}
                  width="25%"
                  alt=""
                  style={{
                    position: "absolute",
                    right: "1%",
                    top: "-1%",
                  }}
                />
              ) : (
                ""
              )}
              <div
                style={{
                  width: "100%",
                  position: "absolute",
                  bottom: "-30%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  // color: "#343a40",
                  // background: "#d0f4de",
                }}
                className="bay-vacancy-container"
              >
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Bay Vacancy
                </span>
                <span style={{ fontSize: "1.8rem", fontWeight: "bolder" }}>
                  {timers !== null ? timers[i].emptyTimer : "00:00"}
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Network Error...</h1>
      )}
      <CustomModal open={open} onClose={onClickCloseModal}>
        {vdemData ? returnData() : <Loader/>}
      </CustomModal>
    </div>
  );
}
