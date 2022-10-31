import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart,LinearScale,CategoryScale,BarElement} from 'chart.js';

Chart.register(
    LinearScale,CategoryScale,BarElement
)

const labels = ['jan','feb','mar','apr','may','june','jul','aug','sep','oct']

const data = {
    labels,
    datasets : [
        {
            label:'2022',
            data: [23,45,67,54,23,23,65,23,66,70],
            backgroundColor:'rgb(54, 105, 233)',
            
        },
        {
            label:'2021',
            data: [29,35,61,24,63,13,95,43,36,23],
            backgroundColor:'rgb(165, 165, 165)'
        }
    ]
}



 
const Table1 = () => {
  
  return (
    <div>
    <Bar data={data} />
    </div>
   
  )
}

export default Table1
