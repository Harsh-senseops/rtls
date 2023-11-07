export let checkInCheckOutConfig = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
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
      },
      colors: ["#FF6969",],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2, // Adjust the width of the line
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
        labels: {
          show: false, // Hide x-axis labels
        },
        axisBorder: {
          show: false, // Hide x-axis lines
        },
        axisTicks: {
          show: false, // Hide x-axis tick marks
        },
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false, // Hide the y-axis line
      },
    },
  };