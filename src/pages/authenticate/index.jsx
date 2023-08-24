import React from "react";
import "./index.css";
import sphere from "../../assets/sphere.png";
import toyotoLogo from "../../assets/toyotalogo.png";
import { useNavigate } from "react-router-dom";

export default function Authenticate() {
    const navigate = useNavigate();
    
    const getIn = () => {
        // alert("Holla")
        localStorage.setItem("TOKEN_KEY",true)
        navigate("/")
    }
  return (
    <>
      <div className="login-container">
        <div className="login">
          <div className="circle-one" style={{
            width:"80px",height:"80px",background:"radial-gradient(circle at 30% 30%, rgb(255, 227, 0), rgb(128, 113, 67))",borderRadius:"50%"
          }}>
            {/* <img src={sphere} width="80px" height="80px" alt="sphere" /> */}
          </div>

          <div className="login-card-container">
            <div className="rtls-header">
              <img src={toyotoLogo} height="60px" />
              <sapn style={{ fontWeight: "bolder", fontSize: "23px", color:"#383838" }}>
                Real time location system
              </sapn>
            </div>
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "1.5rem",
                marginTop: "30px",
                justifySelf: "flex-end",
                padding: "0.5em 0",
                color:"#383838" 
              }}
            >
              Welcome back
            </span>
            <span style={{ paddingBottom: "1.2em",color:"#383838",fontWeight:"bold"  }}>
              Please enter username and password!
            </span>
            <br />
            <input type="text" placeholder="Enter username" name="" id="" />
            <input type="password" placeholder="Enter password" name="" id="" />
            <button onClick={getIn} className="login-btn">Login</button>
          </div>
          <div className="circle-two">
            <img src={sphere} width="150px" height="150px" alt="sphere" />
          </div>
          <div className="circle-three" style={{
            width:"110px",height:"110px",background:"radial-gradient(circle at 30% 30%, rgb(33, 211, 178), rgb(117, 3, 255))",borderRadius:"50%"
          }}>
            {/* <img src={sphere} width="110px" height="110px" alt="sphere" /> */}
          </div>
        </div>
     
        <div className="toyota-img"></div>
      </div>
    </>
  );
}
