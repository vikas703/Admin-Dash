import React from 'react';
import './Cards.css';
import {AiOutlinePieChart} from 'react-icons/ai';
import {BsFillBagCheckFill} from 'react-icons/bs';
import {IoMdContacts} from 'react-icons/io';



const Cards = () => {
  return (
    <div className='Cards'>
    
    <div className='parent'>

    <div className='box1'>
    <div className='backgroud-first'>
    <i className='first1'><AiOutlinePieChart /></i>
    </div>
    <span>
    Revenue
    </span>
    <span>
    $21,456
    </span>
    </div>

    <div className='box1'>
    <div className='backgroud-first'>
    <i className='first1'><BsFillBagCheckFill /></i>
    </div>
    <span>
    orders
    </span>
    <span>
    $21,456
    </span>
    </div>

    <div className='box1'>
    <div className='backgroud-first'>
    <i className='first1'><IoMdContacts /></i>
    </div>
    <span>
    Customers
    </span>
    <span>
    $21,456
    </span>
    </div>

    </div>   

    </div>
  )
}

export default Cards
