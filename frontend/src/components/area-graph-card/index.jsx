import React from "react";
import "./index.css";
import ReactApexChart from "react-apexcharts";

export default function AreaGraphCard({configs,title,count1,count2}) {
  return (
    <div className="graph-card-container">
      <span className="title-text">{title}</span>
      <>
        <span className="count-text">
          <span style={{ fontSize: "7rem" }}>{count1}</span><span style={{ fontSize: "3rem" }}>{count2 ? "/" + count2 : ""}</span>
        </span>
        <div className="graph-container">
          <ReactApexChart
            options={configs.options}
            series={configs.series}
            height={350}
            // width={570}
            type="area"
          />
        </div>
      </>
    </div>
  );
}
