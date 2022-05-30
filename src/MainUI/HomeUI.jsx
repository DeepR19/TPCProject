import React from 'react';
import img1 from "../assests/re.webp"
import img2 from "../assests/instagram-new.png"
import img3 from "../assests/gmail-new.png"
import img4 from "../assests/facebook-new.png"
import {Link} from "react-router-dom";

import Header from '../Header/Header';
import "./main.css";

export default function HomeUI() {
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
    <div className ="container">
    <div className="ham" onClick={ham}>
        <li></li>
        <li></li>
        <li></li>
    </div>
    <Header/>
        {/* <!-- </div> --> */}
    <section>
        <div className="section-data">
            <h1>NexIOT</h1>

            <h3>Lets start bidding...</h3>
            <li className="line"></li>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod minus praesentium non, dolorum accusamus numquam esse possimus ad eum. Quod, ad quis?</p>

            <div className="buttons">
                <Link to="/bid">
                    <button>Get Started</button>
                </Link>
                <Link to="/supp">
                    <button>Read our Stories</button>
                </Link>
        </div>
        </div>
        <div className="section-img">
            <img src={img1} alt=""/>

        </div>
    </section>


    <footer>
        <li>
            <img src={img2} alt=""/>
        </li>
        <li>
            
            <img src={img3} alt=""/>
        </li>
        <li>
        <img src={img4} alt=""/>

        </li>
    </footer>
</div>
</>

  )
}
