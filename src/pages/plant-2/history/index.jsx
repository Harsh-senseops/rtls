import React, { useState } from "react";
import NavBar from "../../../components/nav-bar";
import Autocomplete from "@mui/joy/Autocomplete";
import CheckInIcon from "../../../assets/icons/check-in-icon";
import ReworkIcon from "../../../assets/icons/rework-icon";
import "./index.css";
import Footer from "../../../components/footer";

function IconReturn({icon}) {
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
}

function getColor(name) {
    if (name === "Rework") {
      return "#9376E0";
    }
    if (name === "Check Out") {
      return "#f6c90e"
    }
    if (name === "Check In") {
      return "#00a9ff"
    }
  }

export default function History() {
    const [vinDetails,setVinDetails] = useState(vinNumbers[0])
    console.log(vinDetails)
  return (
    <>
      <NavBar />
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
                console.log(event,newValue)
                setVinDetails(newValue)
              }}
            sx={{ maxWidth: "100%" }}
          />
        </div>
        <div className="bg-theme" style={{ padding: "1em",marginTop:"10px" }}>
         {!vinDetails ? "" : <h2 style={{margin:"0px",marginBottom:"1em"}}>Select VIN number: {vinDetails.label}</h2>}
          {!vinDetails ? "" : vinDetails.details.map((item,index)=>{
            return (
                <div className="track-list">
                <IconReturn icon={item.name}/>
                {index !== 2 ?<div
                  style={{
                    height: "25vh",
                    width: "1px",
                    background: "#EBF3E8",
                    position: "absolute",
                    left: "2%",
                    zIndex: "-1",
                  }}
                ></div>:""}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    margin: "0.4em 1em",
                  }}
                >
                  <span style={{color:getColor(item.name),fontWeight:"800",fontSize:"2rem"}}>{item.name}</span>
                  <div
                    style={{
                      width: "60%",
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "1em 0px",
                    }}
                  >
                    <span>Start Time: {item.startTime}</span>
                    <span>End Time: {item.endTime}</span>
                  </div>
                  <span>Duration: {item.duration}</span>
                </div>
              </div>
            )
          })}
        </div>
        <Footer/>
      </main>
    </>
  );
}

let vinNumbers = [
  {
    label: "AB0",
    details: [
      {
        name: "Check In",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Rework",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check Out",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
    ],
  },
  {
    label: "AB1",
    details: [
      {
        name: "Rework",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check In",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check Out",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
    ],
  },
  {
    label: "AB2",
    details: [
      {
        name: "Rework",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check In",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check Out",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
    ],
  },
  {
    label: "AB3",
    details: [
      {
        name: "Rework",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check Out",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check In",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
    ],
  },
  {
    label: "AB4",
    details: [
      {
        name: "Check Out",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Rework",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check In",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
    ],
  },
  {
    label: "AB5",
    details: [
      {
        name: "Check Out",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Rework",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check In",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
    ],
  },
  {
    label: "AB6",
    details: [
      {
        name: "Rework",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check Out",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check In",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
    ],
  },
  {
    label: "AB7",
    details: [
      {
        name: "Rework",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check In",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check Out",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
    ],
  },
  {
    label: "AB8",
    details: [
      {
        name: "Rework",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check Out",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check In",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
    ],
  },
  {
    label: "AB9",
    details: [
      {
        name: "Rework",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check In",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
      {
        name: "Check Out",
        startTime: "2023-10-13 11:22:36.240",
        duration: "2h",
        endTime: "2023-10-13 11:23:28.137",
      },
    ],
  },
];
