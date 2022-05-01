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


function TempGraph(props) {
    const average = Object.values(props.months).map((value) => value.tAvg * 9/5 + 32)
    const min = Object.values(props.months).map((value) => value.tMax * 9/5 + 32)
    const max = Object.values(props.months).map((value) => value.tMin * 9/5 + 32)
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },  
          title: {
            display: true,
            text: 'Temperature by Month',
          },
        },
        scales: {
          yAxis: {
              title: {
                  display: true,
                  text: "Temperature in Farenheight",
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
            label: "Average Temperature",
            data: average,
            borderColor: "#acf082"
          },
          {
            label: "Minimum Temperature",
            data: min,
            borderColor: "#82acf0"
          },
          {
            label: "Maximum Temperature",
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

export default TempGraph;