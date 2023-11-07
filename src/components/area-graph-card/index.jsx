import React from "react";
import "./index.css";
import ReactApexChart from "react-apexcharts";

export default function AreaGraphCard({configs,title,count1,count2}) {
  return (
    <div className="graph-card-container">
      <span className="title-text">{title}</span>
      <div>
        <p className="count-text">
          <span style={{ fontSize: "3rem" }}>{count1}</span><span>{count2 ? "/" + count2 : ""}</span>
        </p>
        <div className="graph-contaier">
          <ReactApexChart
            options={configs.options}
            series={configs.series}
            height="90%"
            width="100%"
            type="area"
          />
        </div>
      </div>
    </div>
  );
}
