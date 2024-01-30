export let totalWorkConfigs = (data) => ({
    series: [
      {
        name: "TOTAL REWORK",
        data: data,
      },
      {
        name: "",
        data: [],
      },
    ],
    options: {
     
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
      colors: ["#fe7f2d", "#26272c"],
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
        labels: {
          datetimeUTC: false,
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
        enabled: true, // Disable tooltips
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
  });
