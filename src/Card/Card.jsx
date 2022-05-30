import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../assests/re.webp"
import "./card.css"

export default function Card(data) {
    const [bid , setBid] =useState(data.index.Customer.bids[0])
    const handleLow =()=>{
        const data121 = Math.min(data.index.Customer.bids)
        setBid(data121)
    }
    const lis = `/bid/${data.index.Customer.firstname}`
  return (
    
    <Link to={lis} className='lis-bid'>
      <div className='card-bid'>
          <img src={img} alt="" />
        <div>{data.index.Customer.firstname}</div>
        <div>{data.index.Customer.lastname}</div>
        <div>{data.index.Customer.email}</div>
        <div className='card-premi'>{data.index.Customer.hasPremium}</div>
        <div className='card-nin'>
            {bid}
            <button className='card-nin-low' onClick={handleLow}>👈</button>
        </div>
      
      </div>
      </Link>
  )
}
