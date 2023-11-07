export let exportReworkConfig = {
  series: [
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 13, 27],
    },
  ],
  options: {
    dataLabels: {
      enabled: true,
      offsetX: 0,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "20 0%",
              fontWeight: 900,
              color:"white"
            },
          },
        },
      },
    },
    xaxis: {
      position: "bottom",
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
      axisBorder: { show: false },
      labels: {
        style: {
          colors: "white",
        },
        // Hide x-axis labels
      },
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: false, // Disable tooltips
    },
    grid: {
      show: true,
      borderColor: "#ffffff24",
      strokeDashArray: 0,
      position: "back",

      xaxis: {
        lables: {
          style: {
            colors: "white",
          },
        },
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 1,
      },
      column: {
        colors: undefined,
        opacity: 1,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    yaxis: {
        show:true,
        labels:{
            style:{
                colors:"white"
            }
        }
      },
  },
};
