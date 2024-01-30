export function bayEfficiency(usageData,emptyData){
    return {
        series: [{
            name:"Usage",
            data:usageData
        },{
            name:"Vacant",
            data:emptyData
        }
         
        ],
        options: {
          tooltip: {
            enabled: false, // Disable tooltips
          },
          chart: {
            type: "bar",
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              dataLabels: {
                position: "down",
              },
            },
          },
          dataLabels: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "12px",
              colors: ["#fff"],
            },
          },
          xaxis: {
            title:{
              text:"Bay Numbers",
              style:{
                color:"white"
              }
            },
            categories: ["Bay 1","Bay 2","Bay 3","Bay 4","Bay 5","Bay 6"],
            labels: {
              style: {
                colors: "white",
              },
              // Hide x-axis labels
            },
          },
          yaxis: {
            title:{
              text:"Hours",
              style:{
                color:"white"
              }
            },
            // decimalsInFloat: 2,
            labels: {
              style: {
                colors: "white",
              },
              // Hide x-axis labels
            },
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
          legend: {
            show: true,
            labels: {
              colors: "white",
              useSeriesColors: false,
            },
          },
        },
      }
}