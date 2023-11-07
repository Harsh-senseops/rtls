import React from "react";
import "./index.css";
import ScannerIcon from "../../assets/icons/scanner-icon";
import ComputerIcon from "../../assets/icons/computer-icon";
import anchors from "../../assets/anchors.png";

export default function ExitArea(){
    return(
        <div className="exit-area-container">
            <img src={anchors}  alt="" style={{position:"absolute",left:"-4%"}} />
            <img src={anchors}  alt="" style={{position:"absolute",left:"-4%",top:"-3%"}} />
            <img src={anchors}  alt="" style={{position:"absolute",left:"-4%",bottom:"-3%",zIndex:"2"}} />
            <img src={anchors}  alt="" style={{position:"absolute",left:"15%",bottom:"-3%",zIndex:"2"}} />
            <img src={anchors}  alt="" style={{position:"absolute",left:"15%",zIndex:"2"}} />
            <img src={anchors}  alt="" style={{position:"absolute",left:"15%",top:"-4%"}} />

            <span>Exit</span>
            <div className="exit-area-road">
            </div>
        </div>
    )
}