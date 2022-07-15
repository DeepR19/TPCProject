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
       const prev = Array(e.target.parentElement.previousSibling)[0].data
      Number(prev) === max ? setBid(min): setBid(max)       
    }
    const lis = `/bid/${data.index.Customer.firstname}`
  return (
    
    <div className='card-bid'>
        <Link to={lis} className='lis-bid'>
          <img src={img} alt="" />
        <div>{data.index.Customer.firstname}</div>
        <div>{data.index.Customer.lastname}</div>
        <div>{data.index.Customer.email}</div>
        <div className='card-premi'>{data.index.Customer.hasPremium}</div>
            
      </Link>
        <div className='card-nin'>
            {bid} 
            <button className='card-nin-low'>
              {
                bid === max ? <p onClick={handleLow}>MAX</p> : <p onClick={handleLow}>MIN</p>
              }
            </button>
        </div>
      
      </div>
  )
}
