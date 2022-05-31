import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../assests/re.webp"
import "./card.css"

export default function Card(data) {
  const dew = data.index.Customer.bids
  const max = Math.max(...dew);
  const min = Math.min(...dew);
    const [bid , setBid] =useState(max)

    const handleLow =(e)=>{
       const prev = Number([e.target.previousSibling][0].nodeValue)

      prev === max ? setBid(min): setBid(max)       
    }
    const lis = `/bid/${data.index.Customer.firstname}`
  return (
    
    <div className='card-bid'>
        <Link to={lis} className='lis-bid'>
          <img src={img} alt="" />
          {/* <div className="lis-dis"> */}
        <div>{data.index.Customer.firstname}</div>
        <div>{data.index.Customer.lastname}</div>
        <div>{data.index.Customer.email}</div>
        <div className='card-premi'>{data.index.Customer.hasPremium}</div>
          {/* </div> */}
            
      </Link>
        <div className='card-nin'>
            {bid}
            <button className='card-nin-low' onClick={handleLow}>👈</button>
        </div>
      
      </div>
  )
}
