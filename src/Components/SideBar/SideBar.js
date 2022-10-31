import React from 'react';
import './SideBar.css';
import SidebarItem from './SidebarItem';
import Data from '../../data/sidebar';



const SideBar = () => {
  return (
    <div className='Main'>
   
    <div className='sidebar'>
    
    
    { Data.cardData.map((item , index) => <SidebarItem key={index} item={item} />)}
    </div>
     
    </div>
  )
}

export default SideBar
