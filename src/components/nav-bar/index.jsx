import React from "react";
import "./index.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import logo from "../../assets/toyotalogo.png";
import CustomDilougeMui from "../custum-dilouge-mui";
import { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function NavBar({ focusRef }) {
  const homeRef = useRef(null);
  const historyRef = useRef(null);
  const attachDetachRef = useRef(null);
  const alarmsRef = useRef(null);
  const logOutRef = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  let refData = [
    { ref: historyRef, name: "historyRef", navLink: "/history" },
    {
      ref: attachDetachRef,
      name: "attachDetachRef",
      navLink: "/attach-detach",
    },
    { ref: homeRef, name: "homeRef", navLink: "/" },
    { ref: alarmsRef, name: "alarmsRef", navLink: "/alarms" },
    // { ref: logOutRef, name: "logOutRef", navLink:"/ops-four" },
  ];
  useEffect(() => {
    refData.map((val) => {
      if (val.name === focusRef) {
        val.ref.current.classList.add("add-border");
        navigate(val.navLink);
        return;
      }
      val.ref.current.classList.remove("add-border");
    });
  }, []);
  function addBottomBorder(domElement) {
    refData.map((val) => {
      if (val.name === domElement) {
        val.ref.current.classList.add("add-border");
        navigate(val.navLink);
        return;
      }
      val.ref.current.classList.remove("add-border");
    });
  }

  const logout = (isTrue) => {
    setOpen(true);
    if(isTrue){
      localStorage.clear();
      navigate("/authentication/sign-in");
    }
 
  };
  return (
    <>
      <img
        src={logo}
        height="70px"
        width="100px"
        alt=""
        style={{ position: "absolute", left: "20px", top: "8px" }}
        />
      <ul class="menu-bar">
        <li onClick={() => addBottomBorder("historyRef")}>
          <a ref={historyRef}>History</a>
        </li>
        <li onClick={() => addBottomBorder("attachDetachRef")}>
          <a ref={attachDetachRef}>Attach/Detach</a>
        </li>
        <li onClick={() => addBottomBorder("homeRef")}>
          <a ref={homeRef}>Home</a>
        </li>
        <li onClick={() => addBottomBorder("alarmsRef")}>
          <a ref={alarmsRef}>Alarms</a>
        </li>
      </ul>
      <div className="profile-container">
        <div className="profile-details">
          <AccountBoxIcon />
          <span>User</span>
        </div>
        <div className="logout-btn" onClick={()=>logout(false)} > 
        <LogoutIcon  />
        </div>
       
      </div>
      <CustomDilougeMui
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm logout"
        handleSave={()=>logout(true)}
      >
        <span style={{fontWeight:"bold"}}>Are you sure, you want to logout ?</span>       
      </CustomDilougeMui>
    </>
  );
}
