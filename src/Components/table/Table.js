import React from 'react';
import './Table.css';
import Table1 from './Table1';


const Table = () => {
  return (
    <div className='tables'>
    
    <div className='table1'>
    
    <div className='table'>
    <h3>Overview</h3>
  
   
    <h5>This Month</h5>
    <h2>$24,568</h2>
    <br />
    
    <table>
            <tr>
            <td>Orders<h3>5,643</h3></td>
            <td>Sales<h3>16,273</h3></td>
            </tr>

            <tr >
            <td>Order Value<h3>12.03%</h3></td>
            <td>Customers <h3>21,456</h3></td>
            </tr>

            <tr >
            <td>Income<h3>$35,652</h3></td>
            <td>Expenses<h3>$12,248</h3></td>
            </tr>
    
  </table>

    </div>
    </div>
    <div className='chart'>
    <Table1 />
    </div>
    </div>
  )
}

export default Table
