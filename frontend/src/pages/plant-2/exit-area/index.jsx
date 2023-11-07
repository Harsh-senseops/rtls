import React from "react";
import NavBar from "../../../components/nav-bar";
import buzzer from "../../../assets/buzzer.wav";
import "./index.css";
import ExitArea from "../../../components/exit-area";
import Footer from "../../../components/footer";
import { useRef } from "react";
import AreaGraphCard from "../../../components/area-graph-card";
import { avgReworkRecivedConfigs } from "../../../graph-configs/avgReworkConfigs";
import ReactApexChart from "react-apexcharts";
import { parkingDayWiseConfig } from "../../../graph-configs/parkingDayWiseConfigs";

export default function ExitAreaPage() {
  const [isShadowVisible, setShadowVisible] = React.useState(false);
  const myButtonRef = useRef(null);
  const audio = new Audio(buzzer);

  React.useEffect(() => {
    const toggleShadow = () => {
      audio.play().then(() => {
        setShadowVisible((prev) => !prev);
      });
    };

    const interval = setInterval(toggleShadow, 400);

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
      audio.pause(); // Pause the audio
      audio.currentTime = 0; // Reset the audio to the beginning
    };
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <div className="eap-container">
          <div className="ea bg-theme">
            <ExitArea />
          </div>
          <div
            className={`buzzer shadow bg-theme ${
              isShadowVisible ? "show-shadow" : "hide-shadow"
            }`}
            ref={myButtonRef}
          >
            <h1>Buzzer</h1>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex",justifyContent:"space-between" }}>
          <div style={{ width: "48%" }}>
            <ReactApexChart
              options={parkingDayWiseConfig.options}
              series={parkingDayWiseConfig.series}
              type="bar"
            />
          </div>
          <div style={{ width: "48%" }}>
            <ReactApexChart
              options={parkingDayWiseConfig.options}
              series={parkingDayWiseConfig.series}
              type="bar"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
