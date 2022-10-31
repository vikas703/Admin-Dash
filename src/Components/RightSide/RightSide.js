import React from 'react';
import Background from './parts/Background';
import Earn from './parts/Earn';
import Recent from './parts/Recent';
import './RightSide.css';

const RightSide = () => {
  return (
    <div className='Rightside'>
    <div>
    <Background />
    </div>
    <hr />
    <div>
    <Earn />
    </div>
    <hr />
    <div>
    <Recent />
    </div>
    
    </div>
  )
}

export default RightSide
