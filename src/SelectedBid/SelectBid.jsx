import React from 'react'
import file from "../nextIOT.json";
import { useLocation } from 'react-router-dom';
import Img from "../assests/re.webp"
import Header from "../Header/Header"
import { Link } from 'react-router-dom';
import "./selet.css"
export default function SelectBid() {
  const data = file.Data;
  const location = useLocation()
  const loc = location.pathname.split("/")[2]
  
  const d11 = data.find(item=>{
    return(
      item.Customer.firstname = loc
      )
  })
  // console.log(loc, d11)

  return (
    <>
    <Header/>
    <Link to='/bid'  className="back">
      <div className="back1">Back</div>
    </Link>
      <div className='sle-bid-detail'>
        <div className="bid-customer">
          <img src={Img} alt="" />
          <li>{d11.Customer.firstname}   {d11.Customer.lastname}</li>
          <li>{d11.Customer.email}</li>
          <li>{d11.Customer.phone}</li>
        </div>

        <div className="bid-details">
          <li>__{d11.Bid.carTitle}__</li>
          <li>$ {d11.Bid.amount}</li>
        </div>
      </div>
    </>
    )
}
