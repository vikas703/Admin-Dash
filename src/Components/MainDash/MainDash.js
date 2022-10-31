import React from 'react';
import Boxes from '../Boxes/Boxes';
import Cards from '../Cards/Cards';
import Table from '../table/Table';
import './MainDash.css';

const MainDash = () => {
  return (
    <div className='MainDash'>
    
    
    <h4>Dashboard</h4>
    <Cards />
    <Table />
    <Boxes />
    </div>
  )
}

export default MainDash
