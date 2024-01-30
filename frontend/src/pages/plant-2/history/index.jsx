import React, { useState } from "react";
import NavBar from "../../../components/nav-bar";
import Autocomplete from "@mui/joy/Autocomplete";
import CheckInIcon from "../../../assets/icons/check-in-icon";
import ReworkIcon from "../../../assets/icons/rework-icon";
import "./index.css";
import Footer from "../../../components/footer";
import { GET_ALL_HISTORY } from "../../../api/queries";
import { useQuery } from "urql";
import ParkingAreaIcon from "../../../assets/icons/parking-area-icon";
import { getTodaysDate } from "../../../utils/utility";

function historyMaker(data) {
  const reworkEntries = data[0].rework.nodes.map((val) => ({
    name: "Rework",
    startTime: val.startTime,
    endTime: val.endTime,
    duration: calculateTimeDifference(val.startTime, val.endTime),
  }));

  const parkingEntries = data[0].parking.nodes.map((valp) => ({
    name: "Parking",
    startTime: valp.starttime,
    endTime: valp.endtime,
    duration: calculateTimeDifference(valp.starttime, valp.endtime),
  }));

  const checkInEntry = {
    name: "Check In",
    startTime: data[0].attatchedTime,
    endTime: data[0].detachedTime,
    duration: calculateTimeDifference(
      data[0].attatchedTime,
      data[0].detachedTime
    ),
  };

  const checkOutEntry = {
    name: "Check Out",
    startTime: data[0].detachedTime,
  };
  let sorted = [...reworkEntries, ...parkingEntries].sort(
    (a, b) => Date.parse(a.startTime) - Date.parse(b.startTime)
  );
  const tempArry = [checkInEntry, ...sorted, checkOutEntry];
  return { vin: data[0].vinId, details: tempArry };
}
function calculateTimeDifference(startTime, endTime) {
  const startTimestamp = new Date(startTime).getTime();
  const endTimestamp = new Date(endTime).getTime();

  if (!startTime || !endTime) {
    // Invalid timestamps
    return null;
  }

  const timeDifferenceMilliseconds = endTimestamp - startTimestamp;

  // Calculate hours and minutes
  const hours = Math.floor(timeDifferenceMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor(
    (timeDifferenceMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );

  return `${hours}:${minutes}`;
}
function IconReturn({ icon }) {
  if (icon === "Rework") {
    return (
      <div className="icon-bg" style={{ background: "#9376E0" }}>
        <ReworkIcon size="2em" color="white" />
      </div>
    );
  }
  if (icon === "Check Out") {
    return (
      <div
        className="icon-bg"
        style={{ background: "#F6C90E", rotate: "180deg" }}
      >
        <CheckInIcon size="2em" color="white" />
      </div>
    );
  }
  if (icon === "Check In") {
    return (
      <div className="icon-bg" style={{ background: "#00a9ff" }}>
        <CheckInIcon size="2em" color="white" />
      </div>
    );
  }
  if (icon === "Parking") {
    return (
      <div className="icon-bg" style={{ background: "#a8dadc" }}>
        <ParkingAreaIcon size="2em" color="white" />
      </div>
    );
  }
}

function getColor(name) {
  if (name === "Rework") {
    return "#9376E0";
  }
  if (name === "Check Out") {
    return "#f6c90e";
  }
  if (name === "Check In") {
    return "#00a9ff";
  }
  if (name === "Parking") {
    return "#a8dadc";
  }
}

export default function History() {
  const [vinNumbers, setVinNumber] = useState([]);
  const [vinDetails, setVinDetails] = useState([]);
  const [vinValue, setVinValue] = useState("");
  const [history, setHistory] = useState(null);
  const [getAllHistory, rexAllHistory] = useQuery({
    query: GET_ALL_HISTORY,
    variables: {
      vinId: vinValue.toUpperCase(),
    },
  });
  React.useEffect(() => {
    if (getAllHistory.data) {
      let tempArry = getAllHistory.data.allTagcarMappingTables.nodes.map(
        (val) => {
          return {
            label: val.vinId,
            name: "Rework",
            startTime: "abcdef",
            endTime: "ABCDEF",
          };
        }
      );
      setVinNumber(tempArry);
      if (tempArry.length === 1) {
        setHistory(
          historyMaker(getAllHistory.data.allTagcarMappingTables.nodes)
        );
      }
    }
  }, [getAllHistory.data]);
  return (
    <>
      <NavBar />
      {/* <ParkingIcon/> */}
      <main>
        <div
          className="bg-theme"
          style={{ padding: "1em", marginBottom: "2%" }}
        >
          <Autocomplete
            variant="solid"
            placeholder="Enter VIN Number"
            options={vinNumbers}
            onChange={(event, newValue) => {
              setVinDetails(event, newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setVinValue(newInputValue);
            }}
            sx={{ maxWidth: "100%" }}
          />
        </div>
        <div className="bg-theme" style={{ padding: "1em", marginTop: "10px" }}>
          {!history ? (
            ""
          ) : (
            <h2 style={{ margin: "0px", marginBottom: "1em" }}>
              Select VIN number: {history.vin}
            </h2>
          )}
          {!history
            ? ""
            : history.details.map((item, index) => {
                return (
                  <div className="track-list">
                    <IconReturn icon={item.name} />
                    {index !== history.details.length - 1 ? (
                      <div
                        style={{
                          height: "22vh",
                          width: "1px",
                          background: "#EBF3E8",
                          position: "absolute",
                          left: "1.5%",
                          zIndex: "-1",
                        }}
                      ></div>
                    ) : (
                      ""
                    )}
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        margin: "0.4em 1em",
                      }}
                    >
                      <span
                        style={{
                          color: getColor(item.name),
                          fontWeight: "800",
                          fontSize: "2rem",
                        }}
                      >
                        {item.name}
                      </span>
                      {item.name.includes("Check") ? (
                        <span style={{padding:"1em 0em"}}>
                          Time:{" "}
                          {item.startTime ? (
                            <>
                              {" "}
                              {item.startTime.split("T")[0]}{" "}
                              {item.startTime.split("T")[1].slice(0, 5)}
                            </>
                          ) : (
                            ""
                          )}
                        </span>
                      ) : (
                        <>
                          <div
                            style={{
                              width: "60%",
                              display: "flex",
                              justifyContent: "space-between",
                              margin: "1em 0px",
                            }}
                          >
                            <span>
                              Start Time:{" "}
                              {item.startTime ? (
                                <>
                                  {" "}
                                  {item.startTime.split("T")[0]}{" "}
                                  {item.startTime.split("T")[1].slice(0, 5)}
                                </>
                              ) : (
                                ""
                              )}
                            </span>
                            <span>
                              End Time:{" "}
                              {item.endTime ? (
                                <>
                                  {" "}
                                  {item.endTime.split("T")[0]}{" "}
                                  {item.endTime.split("T")[1].slice(0, 5)}
                                </>
                              ) : (
                                "Null"
                              )}
                            </span>
                          </div>
                          <span>Duration: {item.duration}</span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
        </div>
        <Footer />
      </main>
    </>
  );
}
