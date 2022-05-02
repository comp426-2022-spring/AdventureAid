import React from "react";
import { Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


function LineChart(props) {
    const average = Object.values(props.months).map((value) => value.pAvg / 25.4)
    const min = Object.values(props.months).map((value) => value.pMin / 25.4)
    const max = Object.values(props.months).map((value) => value.pMax / 25.4)
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },     
          title: {
            display: true,
            text: 'Precipitation by Month',
          },
        },
        scales: {
            yAxis: {
                title: {
                    display: true,
                    text: "Precipitation (inches)",
                    font: {
                        size: 10
                    },
                }
            },
            xAxis: {
              title: {
                display: true,
                text: "Months",
                font: {
                    size: 10
                },
            }
            }
          }
      };

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Average Precipitation",
            data: average,
            borderColor: "#acf082"
          },
          {
            label: "Minimum Precipitation",
            data: min,
            borderColor: "#82acf0"
          },
          {
            label: "Maximum Precipitation",
            data: max,
            borderColor: "#f082ac"
          }
        ]
      };
    return ( 
        <div style={{textAlign:"center"}}>
            <Line options={options} data={data}/>
        </div>
     );
}

export default LineChart;