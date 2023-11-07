import React from "react";
import NavBar from "../../../components/nav-bar";
import "./index.css";
import CheckIcon from "../../../assets/icons/check-icon";
import Footer from "../../../components/footer";

export default function AttachDetach() {
  return (
    <>
      <NavBar />
      <main>
        <div className="ad-header">
          <h1 style={{ textAlign: "center",margin:"0px",marginBottom:"1em" }}>
            TAG And VIN Live Mapping Screen
          </h1>
         
        </div>
        <div className="ad-id-container" >
            <div style={{display:"flex",width:"100%",justifyContent:"space-around"}}>
                
         
          <div className="ad-id" style={{background:"#"}}>
            <h1>TAG ID</h1>
            <div style={{width:"100%",borderBottom:"2px solid #ffffffa6"}}></div>
            <div className="ad-a-id">
                <span>TAG01</span>
                {/* <span>Not scanned</span> */}
            </div>
          </div>
          <div className="ad-id" style={{background:"#"}}>
            <h1>VIN ID</h1>
            <div style={{width:"100%",borderBottom:"2px solid #ffffffa6"}}></div>
            <div className="ad-a-id">
                <span>VIN0212345</span>
                {/* <span>Not scanned</span> */}
            </div>
          </div>
          </div>
          <div className="ad-msg-container">
            <CheckIcon size="5em" color="#73E93B8C"/>
            <div className="ad-msg">
                <h3>Succefully mapped</h3>
                <h3>VIN and TAG</h3>  
            </div>
          </div>
        </div>
        <div className="alert-modal">

        </div>
        <Footer/>
      </main>
    </>
  );
}
