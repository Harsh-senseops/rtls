export let bayEfficiencyConfig = (data) => ({
  series: [
    {
      data,
    },
  ],
  options: {
    stroke: {
      curve: "straight",
      width: 2,
      // Adjust the width of the line
    },
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: "#999",
        },
      ],
      xaxis: [
        {
          //   x: new Date("14 Nov 2012").getTime(),
          borderColor: "#999",
          yAxisIndex: 0,
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      datetimeUTC: false,
      tickAmount: 6,
      labels: {
        style: {
          colors: "white",
        },
        // Hide x-axis labels
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "white",
        },
        // Hide x-axis labels
      },
    },
    tooltip: {
      enabled: true,
      shared: false,
      marker: {
        show: false,
        size: 5,
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
      x: {
        show: false,
      },
      followCursor: true,
      y: {
        show: false,
        formatter: undefined,
        title: {
          formatter: (seriesName) => "Efficiency",
        },
      },
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        color: "#fffff",
      },
    },
    //   tooltip: {
    //     enabled: true,
    //     enabledOnSeries: undefined,
    //     shared: true,
    //     followCursor: false,
    //     intersect: false,
    //     inverseOrder: false,
    //     custom: undefined,
    //     fillSeriesColor: false,
    //     theme: false,
    //     style: {
    //       fontSize: '12px',
    //       fontFamily: undefined
    //     },
    //     onDatasetHover: {
    //         highlightDataSeries: false,
    //     },
    //     x: {
    //         show: false,
    //         format: 'dd MMM yyyy',
    //         formatter: undefined,
    //     },
    //     y: {
    //       show:false,
    //         formatter: undefined,
    //         title: {
    //             formatter: (seriesName) => "Efficiency",
    //         },
    //     },
    //     z: {
    //       show:false,
    //         formatter: undefined,
    //         title: 'Size: '
    //     },
    //     marker: {
    //         show: true,
    //     },
    //     // items: {
    //     //    display: flex,
    //     // },
    //     fixed: {
    //         enabled: false,
    //         position: 'topRight',
    //         offsetX: 0,
    //         offsetY: 0,
    //     },
    // },
    colors: ["#48cae4", "#caf0f8"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  },

  //   selection: "one_year",
});
