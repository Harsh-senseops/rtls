export let parkingDayWiseConfig = (inCount,outCount,date) =>{
    return {
        series: [
          {
            name: "In",
            data: [inCount],
          },
          {
            name: "out",
            data: [outCount],
          },
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
            categories: [date],
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
