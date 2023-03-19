import React from 'react'
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);



export const Piechart = (present,absent) => {

    const data = {
        datasets: [{
            data: [34,45],
            backgroundColor:[
              'blue',
              'red'
              
            ]
        },
      ],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Absent',
          'Present',
          
      ], 
    };
  return (
    <div className='Piechart' ><Pie data={data}/></div>
    
  )
}
