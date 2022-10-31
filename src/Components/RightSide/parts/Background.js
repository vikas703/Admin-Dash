import React from 'react';
import './For3.css';
import Blue from '../../../Images/Blue.webp';
import John from '../../../Images/John.webp';



const Background = () => {
  return (
    <div className='background'>
    <img className='Img' src={Blue} alt='Blue' />
    
    <div className='ImgeBack'>
    <img className='Img1' src={John} alt='Blue' />
    </div>
    <div className='text'>
    <h3>Vikas Mulastham</h3>
    <h5>Software Developer</h5>
    </div>
   
    </div>
  )
}

export default Background


/*   
 <div className='text1'>
    <div>
    <h5>1,269</h5>
    <p>Products</p>
    </div>
    <div>
    <h5>5.2K</h5>
    <p>Followers</p>
    </div>
   
    </div>

    
*/