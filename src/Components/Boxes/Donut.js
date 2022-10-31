import React , {useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import './Boxes.css';

const Donut = () => {
  const [state , setState] = useState({
    series: [44, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  })
  return (
    <div className='donut1'>
    <h4>Order Stats</h4>
    <div className='Donut'>
    
    <ReactApexChart options={state.options} series={state.series} type="donut" width={270}  height={360} />
    </div>
    </div>
    
  )
}

export default Donut

