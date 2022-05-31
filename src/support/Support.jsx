import React from 'react'
import Header from '../Header/Header'

export default function Support() {
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

  })
  return (
      <>
      {/* <div className ="container"> */}
    <div className="ham" onClick={ham}>
        <li></li>
        <li></li>
        <li></li>
    </div>
      <Header/>
      <div className="aup">

        <div className='supp'>__Support Me__</div>
        <h1 className='supp-name'>Deepak</h1>
        <h2 className='supp-roll'>34</h2>
        <h2> </h2>
        <h6 className='supp-roll'>chauhandeep5432@gmail.com</h6>
        <h4 className='supp-roll'>8368606409</h4>
        
      </div>

      <div className="strip"></div>
      </>
  )
}
