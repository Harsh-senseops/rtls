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

const App = () => {
  const imageArray = [india,afghanistan,france,jamaica,liberia,russaia,srilanka,taiwan,zimbabwe,australia]

  return (
    <>
    <NavBar focusRef="homeRef"/>
 <Maps imageArray={imageArray}/>
 {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum tempora facere saepe recusandae necessitatibus aspernatur eaque corporis alias, praesentium provident labore dignissimos asperiores est aut? Modi itaque eveniet officia.</span> */}
    <Footer/>
    </>
  );
};

export default App;
