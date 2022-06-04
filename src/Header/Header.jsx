import React from 'react'
import { Link } from 'react-router-dom';
import "../MainUI/main.css";

export default function Header() {
  let dov = document.querySelector('.ham');
  const ham = ()=>{
      document.querySelector(".header").classList.toggle("active")
      dov.classList.toggle("active")
  }

  window.addEventListener("resize",()=>{
      if(window.outerWidth > 1200){
          document.querySelector(".header").classList.remove("active")
          dov.classList.remove("active")

      }

  });

  
  return (
    <>
    <div className="ham" onClick={ham}>
            <li></li>
            <li></li>
            <li></li>
        </div>
    <div className="header ">
        <div className="none"></div>
        <nav>
            <Link to="/" className='linu'>
              <li>Home</li>
            
            </Link>
            <Link to="/bid" className='linu'> 
              <li>Pricing</li>
            </Link>
            <Link to="/supp" className='linu'> 
              <li>Support</li>
            </Link>

        </nav>

        <div className="info">
        </div>
    </div>

        </>
  )
}
