export const lineGraphConfig = (data,categories) => {
  return {
    series: [
      {
        data: data,
      },
    ],
    options: {
      tooltip: {
        enabled: true,
        style: {
          fontSize: '12px',
          fontFamily: undefined,
          color:"black"
        },
         // Disable tooltips
      },
      chart: {
        type: "line",
        toolbar: {
          show: false,
        },
        zoom:{
          enabled:false
        }
      },
      colors: ["#BEADFA"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
          curve: "smooth",
          width: 5, // Adjust the width of the line
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
      fill:{
        type:"gradient",
        gradient:{
          // shade:"dark",
          // gradientToColors:['red','yellow'],
          // shadeIntensity:1,
          // type:"horizontal",
          // opacityFrom:1,
          // opacityTo:1,
          // stops:[0,200,200,200]
        }
        },
      xaxis: {
        title:{
          text:"Bay Numbers",
          style:{
            color:"white"
          }
      },
        categories: categories,
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
        title:{
          text:"Hours",
          style:{
            color:"white"
          }
      },
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
        // decimalsInFloat:2,
      },
      legend:{
          show:true,
      },
     
    },
  };
}