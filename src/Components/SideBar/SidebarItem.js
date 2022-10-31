import React from 'react';
import {RiArrowDropDownLine} from 'react-icons/ri';

import { useState } from 'react';


const SidebarItem = ({item}) => {
    const [open ,setOpen] = useState(false);


    if(item.childrens){
        return (
            <div className={open? 'sidebar-item open' : 'sidebar-item'}>
            
            <div className='sidebar-title'>
            <span>
            {item.icon && <i className='first'>{item.icon}</i> }
            <span className='hello'> {item.title}</span>
            
            </span>
            <i className='second' onClick={() => setOpen(!open)}> <RiArrowDropDownLine /></i>
            </div>
        
            <div className='sidebar-content'>
            { item.childrens.map((child , index) => <SidebarItem key={index} item={child} /> )}
            </div>
              
            </div>
          )

    }
    else{
        return (
            <div className={open? 'sidebar-item open' : 'sidebar-item'}>
            <div className='sidebar-title'>
            <span>
            {item.icon && <i className='first'>{item.icon}</i> }
            <span className='hello'> {item.title}</span>
            </span>
            </div>
              
            </div>
          )
    }
 
}

export default SidebarItem