import React from 'react'
import Img from "../assests/404(2).jpg";
import Header from "../Header/Header";
import "./ErrPage.css"
const ErrPage = () => {
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
    return(
        <>
         <div className="ham" onClick={ham}>
            <li></li>
            <li></li>
            <li></li>
        </div>
            <Header/>
            <div className="ErrPage">
                <img className="ErrPik" src={Img} alt="Error"/>
            </div>
        </>
        
    )
}

export default ErrPage;