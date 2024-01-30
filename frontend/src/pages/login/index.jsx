import React, { useState } from "react";
import "./index.css";
import Input from "@mui/joy/Input";
import toyotaLogo from "../../assets/Toyota-logo.png";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import EyeIconOn from "../../assets/icons/eye-on-icon";
import EyeIconOff from "../../assets/icons/eye-off-icon";

export default function LoginPage() {
<<<<<<< HEAD
    const [eyeIconState,setEyeIconState] = useState(false);
=======
  const [eyeIconState, setEyeIconState] = useState(false);
>>>>>>> f9113c7 (Latest code)
  let navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-layout bg-theme">
        <img
          src={toyotaLogo}
          height={100}
          width={100}
          alt=""
          style={{ margin: "1em" }}
        />
<<<<<<< HEAD
        <h2>Namaste &#128591; RTLS</h2>
=======
        <h2>Welcome to RTLS</h2>
>>>>>>> f9113c7 (Latest code)
        <Input
          placeholder="Username"
          variant="solid"
          sx={{
            width: "80%",
            background: "black",
            margin: "1em",
          }}
        />
        <Input
<<<<<<< HEAD
        endDecorator={eyeIconState ? <EyeIconOn color="white" size="1em" onClick={()=>setEyeIconState(prev=>!prev)}/> :<EyeIconOff color="white" size="1em" onClick={()=>setEyeIconState(prev=>!prev)}/> }
          placeholder="Password"
          variant="solid"
          type={!eyeIconState ? "password":"text"}
          sx={{ width: "80%", background: "black", margin: "1em" }}
        />
        <Button
          sx={{ width: "50%", margin: "1em",marginBottom:"4em" }}
=======
          endDecorator={
            eyeIconState ? (
              <EyeIconOn
                color="white"
                size="1em"
                onClick={() => setEyeIconState((prev) => !prev)}
              />
            ) : (
              <EyeIconOff
                color="white"
                size="1em"
                onClick={() => setEyeIconState((prev) => !prev)}
              />
            )
          }
          placeholder="Password"
          variant="solid"
          type={!eyeIconState ? "password" : "text"}
          sx={{ width: "80%", background: "black", margin: "1em" }}
        />
        <Button
          sx={{ width: "50%", margin: "1em", marginBottom: "4em" }}
>>>>>>> f9113c7 (Latest code)
          onClick={() => navigate("/")}
        >
          Login
        </Button>
<<<<<<< HEAD

=======
>>>>>>> f9113c7 (Latest code)
      </div>
    </div>
  );
}
