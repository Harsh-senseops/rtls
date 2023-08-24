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
           
          </div>

          <div className="login-card-container">
            <div className="rtls-header">
            <svg  xmlns="http://www.w3.org/2000/svg" width="100" height="24" viewBox="0 0 136 24"
><path fill="none" d="M0 0h158v48H0V0z"/><path  fill="#EB0A1E" d="M20.354.804H1.004v4.278h7.142v18.241h5.067V5.082h7.141V.804m18.921 14.874a6.206 6.206 0 0 1-4.678 3.826 6.807 6.807 0 0 1-1.175.104c-.399 0-.792-.038-1.172-.104a6.197 6.197 0 0 1-4.676-3.826 9.886 9.886 0 0 1-.682-3.614c0-1.276.243-2.498.682-3.617.791-2 2.56-3.447 4.676-3.825a6.474 6.474 0 0 1 2.347 0 6.203 6.203 0 0 1 4.678 3.824 9.95 9.95 0 0 1 0 7.232M33.421.127c-6.589 0-11.936 5.344-11.936 11.937 0 6.588 5.347 11.933 11.936 11.933 6.594 0 11.937-5.345 11.937-11.933 0-6.593-5.343-11.937-11.937-11.937zm12.017.677h5.968l5.573 9.682L62.552.804h5.966l-9.006 14.188v8.331h-5.066v-8.331L45.438.804M80.549 19.61c.398 0 .793-.04 1.172-.106a6.193 6.193 0 0 0 4.676-3.824 9.877 9.877 0 0 0 0-7.231 6.197 6.197 0 0 0-4.676-3.826 6.674 6.674 0 0 0-2.35 0 6.193 6.193 0 0 0-4.674 3.825 9.872 9.872 0 0 0-.684 3.615c0 1.276.243 2.495.684 3.616a6.188 6.188 0 0 0 4.674 3.824 6.72 6.72 0 0 0 1.178.107m-11.938-7.547c0-6.592 5.342-11.938 11.938-11.938 6.589 0 11.936 5.344 11.936 11.938C92.484 18.651 87.138 24 80.549 24c-6.596 0-11.938-5.349-11.938-11.937zm58.432 2.347l-3.316-8.897-3.32 8.897h6.636m1.47 3.94h-9.585l-1.844 4.959h-5.637L120.57.788h6.304L136 23.309h-5.63l-1.857-4.959zM112.936.804h-19.35v4.278h7.145l-.002 18.241h5.069l-.002-18.241h7.14V.804"/></svg>
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
