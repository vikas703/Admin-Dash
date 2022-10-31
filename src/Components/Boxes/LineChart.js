import React , {useState} from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {

    const [state , setState] = useState({
        series: [{
            name: 'Current',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'Previous',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          }
    })



  return (
    <div className='LineChart'>
    <h5>User Activity</h5>
    <ReactApexChart options={state.options} series={state.series} type="area" width={230}  height={160} />
    </div>
  )
}

export default LineChart

