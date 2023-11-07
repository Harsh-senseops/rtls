import carImg2 from "../assets/brown-car.png";
export default function zon1Config(x, y, xmax, ymax) {
  return {
    series: [
      {
        name: "Zone",
        data: [[x, y]],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "scatter",
        animations: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#056BF6", "#D2376A"],
      xaxis: {
        labels: {
          show: false,
        },
        tickAmount: xmax,
        min: 0,
        max: xmax,
        axisBorder: {
          show: false, // Hide x-axis lines
        },
        axisTicks: {
          show: false, // Hide x-axis tick marks
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        tickAmount: ymax,
        min: 0,
        max: ymax,
        axisBorder: {
          show: false, // Hide x-axis lines
        },
        axisTicks: {
          show: false, // Hide x-axis tick marks
        },
      },
      markers: {
        size: 20,
      },
      fill: {
        type: "image",
        opacity: 1,
        image: {
          src: [carImg2],
          width: 40,
          height: 40,
        },
      },

      grid: {
        show: false,
      },
      legend: {
        enabled: true,
      },
      tooltip: {
        theme: "custom", // Use a custom theme
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          const color = "#FF5733"; // Specify the background color you want

          return (
            '<div style="background-color: ' +
            color +
            '; padding: 10px; color: white;">' +
            "<span>" +
            w.globals.seriesNames[seriesIndex] +
            "</span>: " +
            "<strong>" +
            series[seriesIndex][dataPointIndex] +
            "</strong>" +
            "<br/>" +
            `<span>Zone Details </span>` +
            "</div>"
          );
        },
      },
    },
  };
}
