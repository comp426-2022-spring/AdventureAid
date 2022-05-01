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
    const average = Object.values(props.months).map((value) => value.pAvg)
    const min = Object.values(props.months).map((value) => value.pMax)
    const max = Object.values(props.months).map((value) => value.pMin)
    console.log(max)
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          scales: {
            yAxes: {
                title: {
                    display: true,
                    text: "yAxisTitle",
                    font: {
                        size: 15
                    }
                },
                ticks: {
                    precision: 0
                }
            },
            xAxes: {
                title: {
                    display: true,
                    text: "xAxisTitle",
                    font: {
                        size: 15
                    }
                }
            }
        },     
          title: {
            display: true,
            text: 'Temperature by Month',
          },
        },
      };

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Average Temp",
            data: average,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Min Temp",
            data: min,
            fill: false,
            borderColor: "#742774"
          },
          {
            label: "Max Temp",
            data: max,
            fill: false,
            borderColor: "#4ce665"
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