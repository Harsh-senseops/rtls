import React, { useEffect } from "react";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import LogoutIcon from "../../assets/icons/logout-icon";
import UserIcon from "../../assets/icons/user-icon";
import "./index.css";

export default function CustomBreadCrum() {
    const [show,setShow] = React.useState(false)
    const [lastItem,setLastItem] = React.useState("")
    useEffect(() => {
      let tempItem = window.location.href.split("/");
      let lastItem = tempItem[tempItem.length - 1].split("-");
      let result = lastItem.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      
      // Capitalize the first letter of the last item
      // lastItem = lastItem.charAt(0).toUpperCase() + lastItem.slice(1);
    
      setLastItem(result);
    }, []);
    
  return (
    <>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumbs"
        style={{
          background: "#2c2d33",
          color: "white",
          marginLeft: "3rem",
          marginTop: "0.1rem",
        }}
      >
        <Link color="white" href="/">
          RTLS
        </Link>
        <Typography>Plant2</Typography>
        {["Dashboard"].map((item) => (
          <Link
            key={item}
            color="white"
            href="/plant2/dashboard"
          >
            {item}
          </Link>
        ))}

        <Typography>{lastItem}</Typography>
       
      </Breadcrumbs>
        {/* <Box
          sx={{
            display: "flex",
            gap: 2,
            float: "right",
            margin: "auto",
            position: "absolute",
            right: "5%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="profile-container"
            onClick={() => setShow((prev) => !prev)}
          >
            <div
              style={{
                background: "white",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}
            >
              <UserIcon size="1.8em" color="red" />
            </div>
            <span>User</span>
          </div>
        </Box>  */}
      <div
        onClick={() => navigate("/login")}
        className="logout-dropDown bg-theme"
        style={{ display: show ? "flex" : "none" }}
      >
        <LogoutIcon size="1.3em" color="white" /> <span>Logout</span>
      </div>
    </>
  );
}
