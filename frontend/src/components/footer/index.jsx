import React from "react";

export default function Footer(){
    const [pageHeight, setPageHeight] = React.useState(document.documentElement.scrollHeight);
    return(
        
        <div style={{position:"absolute",right:"10px"}}>
            <h1 style={{fontSize:"0.8rem",color:"#ffffff6b"}}>@2023 Made by Senseops</h1>
        </div>
    )
}