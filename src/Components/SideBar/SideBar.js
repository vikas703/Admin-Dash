import React, {useState} from 'react';
import './SideBar.css';
import SidebarItem from './SidebarItem';
import Data from '../../data/sidebar';
import {AiOutlineMenuFold} from 'react-icons/ai';



const SideBar = () => {
  const [ menu , setMenu] = useState(false);
  return (
    <div>
    <div className='Menu' onClick={e => setMenu(!menu)}>
    <AiOutlineMenuFold />
    </div>
    {
      menu ? (
        <div className='Main'>
        <div className='sidebar'>
        { Data.cardData.map((item , index) => <SidebarItem key={index} item={item} />)}
        </div>
        </div>

      ) : <></>
    }
    </div>
    
  )
}

export default SideBar
