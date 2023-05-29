// src/components/PieChart.js
import { Data } from "../GraphData"; 
import { Line } from "react-chartjs-2"; 

export default function HomeLineGraph( ) {

  const chartData= {
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)", 
          "#50AF95",
          "#50CF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  };



  return (

    <Line
      data={chartData}
      options={{
        plugins: {
           
          legend: {
            display: false
          }
        }
      }}
    />
  )
} 