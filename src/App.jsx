import React from "react";
import "react-vis/dist/style.css";
import india from "../src/assets/india.png";
import afghanistan from "../src/assets/afghanistan.png";
import france from "../src/assets/france.png";
import jamaica from "../src/assets/jamaica.png";
import liberia from "../src/assets/liberia.png";
import russaia from "../src/assets/russaia.png";
import srilanka from "../src/assets/srilanka.png";
import taiwan from "../src/assets/taiwan.png";
import zimbabwe from "../src/assets/zimbabwe.png";
import australia from "../src/assets/australia.png";
import "./App.css";
import Maps from "./pages/map";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import CustomExpandableCard from "./components/expandable-card";

const App = () => {
  const imageArray = [
    india,
    afghanistan,
    france,
    jamaica,
    liberia,
    russaia,
    srilanka,
    taiwan,
    zimbabwe,
    australia,
  ];
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <NavBar focusRef="homeRef" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Maps imageArray={imageArray} />
        <div style={{ width: "20%", marginTop: "6em" }}>
          <CustomExpandableCard expanded={expanded} handleExpandClick={handleExpandClick}/>
          <CustomExpandableCard expanded={expanded} handleExpandClick={handleExpandClick}/>
          <CustomExpandableCard expanded={expanded} handleExpandClick={handleExpandClick}/>
          <CustomExpandableCard expanded={expanded} handleExpandClick={handleExpandClick}/>
        </div>
      </div>
      <div
        style={{
          height: "10vh",
          width: "100%",
          background: "yellow",
          marginTop: "20px",
        }}
      >
        Alerts
      </div>
      <Footer />
    </>
  );
};

export default App;
