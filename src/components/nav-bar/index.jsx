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
    if (isTrue) {
      localStorage.clear();
      navigate("/authentication/sign-in");
    }
  };
  return (
    <>
      <svg
      onClick={()=>navigate("/")}
        xmlns="http://www.w3.org/2000/svg"
        width="136"
        height="24"
        viewBox="0 0 136 24"
        style={{ position: "absolute", left: "20px", top: "20px",cursor:"pointer" }}
      >
        <path fill="none" d="M0 0h158v48H0V0z" />
        <path
          fill="#EB0A1E"
          d="M20.354.804H1.004v4.278h7.142v18.241h5.067V5.082h7.141V.804m18.921 14.874a6.206 6.206 0 0 1-4.678 3.826 6.807 6.807 0 0 1-1.175.104c-.399 0-.792-.038-1.172-.104a6.197 6.197 0 0 1-4.676-3.826 9.886 9.886 0 0 1-.682-3.614c0-1.276.243-2.498.682-3.617.791-2 2.56-3.447 4.676-3.825a6.474 6.474 0 0 1 2.347 0 6.203 6.203 0 0 1 4.678 3.824 9.95 9.95 0 0 1 0 7.232M33.421.127c-6.589 0-11.936 5.344-11.936 11.937 0 6.588 5.347 11.933 11.936 11.933 6.594 0 11.937-5.345 11.937-11.933 0-6.593-5.343-11.937-11.937-11.937zm12.017.677h5.968l5.573 9.682L62.552.804h5.966l-9.006 14.188v8.331h-5.066v-8.331L45.438.804M80.549 19.61c.398 0 .793-.04 1.172-.106a6.193 6.193 0 0 0 4.676-3.824 9.877 9.877 0 0 0 0-7.231 6.197 6.197 0 0 0-4.676-3.826 6.674 6.674 0 0 0-2.35 0 6.193 6.193 0 0 0-4.674 3.825 9.872 9.872 0 0 0-.684 3.615c0 1.276.243 2.495.684 3.616a6.188 6.188 0 0 0 4.674 3.824 6.72 6.72 0 0 0 1.178.107m-11.938-7.547c0-6.592 5.342-11.938 11.938-11.938 6.589 0 11.936 5.344 11.936 11.938C92.484 18.651 87.138 24 80.549 24c-6.596 0-11.938-5.349-11.938-11.937zm58.432 2.347l-3.316-8.897-3.32 8.897h6.636m1.47 3.94h-9.585l-1.844 4.959h-5.637L120.57.788h6.304L136 23.309h-5.63l-1.857-4.959zM112.936.804h-19.35v4.278h7.145l-.002 18.241h5.069l-.002-18.241h7.14V.804"
        />
      </svg>
      {/* <img
        src={logo}
        height="70px"
        width="100px"
        alt=""
        /> */}
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
        <div className="logout-btn" onClick={() => logout(false)}>
          <LogoutIcon />
        </div>
      </div>
      <CustomDilougeMui
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm logout"
        handleSave={() => logout(true)}
      >
        <span style={{ fontWeight: "bold" }}>
          Are you sure, you want to logout ?
        </span>
      </CustomDilougeMui>
    </>
  );
}
