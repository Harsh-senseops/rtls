export const alarmGraphConfig =  {
  series: [
    {
      data: [1, 4, 2, 6, 5, 2, 7],
    },
  ],
  options: {
    tooltip: {
      enabled: false, // Disable tooltips
    },
    chart: {
      type: "scatter",
      toolbar: {
        show: false,
      },
    },
    colors: ["#BEADFA"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
        curve: "straight",
        width: 2, // Adjust the width of the line
      },
    grid: {
      show: true,
      borderColor: "#ffffff24",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
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
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
        // show: true,
      labels: {
       
        style:{

            colors:"white"
        }
         // Hide x-axis labels
      },
      axisBorder: {
        show: false, // Hide x-axis lines
      },
      axisTicks: {
        show: false, // Hide x-axis tick marks
      },
      
    },
    yaxis: {
      labels: {
        style:{
            align: '',
            colors:"white"
        }
        // Hide x-axis labels
      },
      axisBorder: {
        show: false, // Hide x-axis lines
      },
      axisTicks: {
        show: false, // Hide x-axis tick marks
      },
    },
    legend:{
        show:false,
    }
  },
};