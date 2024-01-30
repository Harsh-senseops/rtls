export function checkInCheckOutConfig(inData, outData) {

  return {
    series: [
      {
        name: "OUT",
        // data: [1,2,3,4,5,6,7,8,9,10],
        data:outData
      },
      {
        name: "CHECK IN",
        // data: [1,2,3,4,5,6],
        data:inData
      },
    ],
    options: {
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
      chart: {
        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.35,
        },
        type: "scatter",
        toolbar: {
          show: false,
        },
        zoom:{
          enabled:false,
        }
      },
      colors: ["#FF6969", "#fcca46"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2, // Adjust the width of the line
      },

      xaxis: {
        type: "category",
        categories:["","09:45","12:45","15:45","18:45"],
        // categories:[]
        labels: {
          // datetimeUTC: false,
          show: true,
          style: {
            colors: "white",
            fontSize: "15px",
          },
        },

        axisBorder: {
          show: false, // Hide x-axis lines
        },
        axisTicks: {
          show: false, // Hide x-axis tick marks
        },
      },
      tooltip: {
        enabled: true,
        style: {
          fontSize: '12px',
          fontFamily: undefined,
          color:"black"
        },
         // Disable tooltips
      },
      legend: {
        labels: {
          colors: "white",
        },
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false, // Hide the y-axis line
      },
    },
  };
}
