export let parkingCurrentVehicaleData = (name,data,categories) =>{
    return {
      series: [
        {
          name,
          data,
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
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
            title: {
                text: 'Vin Numbers',
                floating: true,
                align: 'center',
                style: {
                  color: 'white',
                }
              },
          position: "bottom",
          axisBorder: { show: false },
          labels: {
            style: {
              colors: "white",
            },
          },
          categories
        },
        yaxis: {
          title: {
            text: 'Hours',
            style: {
              color: 'white'
            }
          },
          show:true,
            labels:{
                style:{
                    colors:"white"
                }
            } 
        },
        fill: {
          opacity: 1,
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          enabled: false, // Disable tooltips
        },
        legend:{
          labels: {
            colors: "white",
        },
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
       
      },
    };
  }
  