import React, { useState, useEffect } from "react";
import "./index.css";
import CustomModal from "../custom-modal";
import CustomTable from "../custom-table";
import { useMutation, useSubscription } from "urql";
import { ALL_PARKING_AREAS_INFO } from "../../api/queries";
import { START_PARKING_TIMER } from "../../api/mutation";
import { calculateTimeDifference } from "../../utils/utility";
import { useSelector } from "react-redux";
import PriorityPinIcon from "../../assets/icons/priority-pin-icon";
import Loader from "../loader";

const NETWORK_ERROR_MESSAGE = "Network Error.";
const INCORRECT_VIN_NUMBER_MESSAGE = "Incorrect Vin Number";
const NO_RECORDS_FOUND_MESSAGE = "No records found.";
const NUMBER_OF_PARKING_SLOTS = 30;

const fetchVdemData = async (url) => {
  let tempArray = [];
  await fetch(
    `http://192.168.242.207:94/DefectData/GetVehicleDefectList?vinNumber=${url}`,
    {
      method: "GET",
    }
  )
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

export default function ParkingSlots() {
  const [open, setOpen] = React.useState(false);
  const [vdemData, setVdemData] = React.useState(null);
  const [allParkingAreasInfo, rexAllParkingInfo] = useSubscription({
    query: ALL_PARKING_AREAS_INFO,
  });
  const [resStartParkingTimer, startParkingTimer] =
    useMutation(START_PARKING_TIMER);
  // let [noOfSlots, setNoOfSlots] = useState([]);
  // const [headerInfo, setHeaderInfo] = useState(null);

  let noOfSlots = useSelector((store) => {
    return store.timers.parkingSlots.noOfSlots;
  });

  let headerInfo = useSelector((store) => {
    return store.timers.parkingSlots.headerInfo;
  });
  const onClickOpenModal = (i) => {
    fetchVdemData(noOfSlots[i].vin)
      .then((data) => {
        setVdemData(data);
      })
      .catch((error) => console.log(error));
    setOpen(true);
  };
  const onClickCloseModal = () => {
    setVdemData(null);
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    alert(`You chose "${newValue}"`);
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
    <div className="ps-container">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "0.7em 0px",
        }}
      >
        <span className="ps-details">Capacity 30</span>
        <span className="ps-details">
          Occupied {headerInfo && headerInfo.occupiedList}
        </span>
        <span className="ps-details">
          Free {headerInfo && headerInfo.freeList}
        </span>
        <span className="ps-details">
          Domestic {headerInfo && headerInfo.domesticList}
        </span>
        <span className="ps-details">
          Export {headerInfo && headerInfo.exportList}
        </span>
      </div>
      <div class="grid-container">
        {noOfSlots.map((val, index) => {
          return (
            <div class="grid-item">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: !val.isOccupied ? "#adb5bd" : "#52b69a",
                  borderRadius: "4px",
                }}
              >
                <div
                  className="grid-container-contents"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#fffbfa",
                  }}
                >
                  {val.isOccupied ? (
                    <span
                      className="p-vin-number"
                      onClick={() => onClickOpenModal(index)}
                    >
                      {val.vin}
                    </span>
                  ) : (
                    <span>Empty Since</span>
                  )}
                  <div>
                    <span style={{ marginRight: "1em" }}>{val.time}</span>
                    {val.isOccupied && val.isPriority ? (
                      <PriorityPinIcon size="1em" />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <CustomModal open={open} onClose={onClickCloseModal}>
        {vdemData ? returnData() : <Loader />}
      </CustomModal>
    </div>
  );
}
