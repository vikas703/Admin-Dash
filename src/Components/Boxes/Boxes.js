import React from 'react';
import './Boxes.css';
import {RiNumber1 , RiNumber2 , RiNumber3} from 'react-icons/ri';
import LineChart from './LineChart';
import Donut from './Donut';

const Boxes = () => {
  return (
    <div className='Boxes'>


    <div className='Box1'>
    <LineChart />

    </div>

    <div className='Box2'>
    <Donut />
    </div>





    <div className='Box3'>

    <div className='Inside1'>
    <span>Boxes</span>
    <span>Monthly</span>
    </div>

    <div className='Inside'>
    <div className='NumBack'>
    <span className='NumberSty'>#<RiNumber1 /> </span>
    <div className='shirt'>
    <p>Shirt white</p>
    <h5>$20.4</h5>
    </div>
    
    <span className='Month'>3.24K</span>
    </div>
    </div>

    <div className='Inside'>
    <div className='NumBack'>
    <span className='NumberSty'>#<RiNumber2 /> </span>
    <div className='shirt'>
    <p>Shirt white</p>
    <h5>$20.4</h5>
    </div>
    
    <span className='Month'>3.82K</span>
    </div>
    </div>

    <div className='Inside'>
    <div className='NumBack'>
    <span className='NumberSty'>#<RiNumber3 /> </span>
    <div className='shirt'>
    <p>Shirt white</p>
    <h5>$20.4</h5>
    </div>
    
    <span className='Month'>2.18K</span>
    </div>
    </div>
   
    </div>


    

    </div>
  )
}

export default Boxes
