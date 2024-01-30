import React from "react";
import ReactApexChart from "react-apexcharts";

export default function LineGraphCard({config}) {
  return (
    <div id="chart">
    <ReactApexChart
      options={config.options}
      series={config.series}
      height={350}
      width="99%"
    />
    </div>
  );
}
