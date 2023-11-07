export const bayEfficiency = (title) => {
    return {
        series: [
          {
            data: [1, 4, 2, 6, 5, 2, 7],
          },
          {
            data: [1, 3, 6, 4, 5, 6, 7],
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
          colors: ["#FF6969", "#78C1F3", "#78C1F3", "#78C1F3"],
          dataLabels: {
            enabled: true,
          },
          stroke: {
              curve: "smooth",
              width: 2, // Adjust the width of the line
            },
          title: {
            text: title,
            align: "center",
            style: {
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: 'Gabarito', 
              // fontFamily: 'Roboto Slab',
              color: "white",
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
}