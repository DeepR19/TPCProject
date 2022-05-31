import {  useEffect, useState } from 'react';
import '../App.css';
import Header from '../Header/Header';
import file from "../nextIOT.json";
import "../Some.css"
import Card from "../Card/Card"

function Bid() {
  
  
  const dew1 = file.Data.sort((a,c)=>{
    return a.Customer.bids[0] - c.Customer.bids[0]
  })

  const [datas,  setDatas] = useState(dew1);
  const [data,  setData] = useState(dew1);
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState([])
  const [done , setDone] = useState(true)

  const getPager =(totalItems, currentPage, pageSize) =>{

    // default to first page
    
           currentPage = currentPage || 1;
    
    
           // default page size is 10
    
           pageSize = pageSize || 10;
    
    
           // calculate total pages
    
           var totalPages = Math.ceil(totalItems / pageSize);
    
    
           var startPage, endPage;
    
           if (totalPages <= 10) {
    
               // less than 10 total pages so show all
    
               startPage = 1;
    
               endPage = totalPages;
    
           } else {
    
               // more than 10 total pages so calculate start and end pages
    
               if (currentPage <= 6) {                startPage = 1;                endPage = 10;            } else if (currentPage + 4 >= totalPages) {
    
                   startPage = totalPages - 9;
    
                   endPage = totalPages;
    
               } else {
    
                   startPage = currentPage - 5;
    
                   endPage = currentPage + 4;
    
               }
    
           }
    
    
    
           // calculate start and end item indexes
    
           var startIndex = (currentPage - 1) * pageSize;
    
           var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    
    
    
           // create an array of pages to ng-repeat in the pager control
    
           var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
    
    
           // return an object with all pager properties required by the view
    
           return {
    
               totalItems: totalItems,
    
               currentPage: currentPage,
    
               pageSize: pageSize,
    
               totalPages: totalPages,
    
               startPage: startPage,
    
               endPage: endPage,
    
               startIndex: startIndex,
    
               endIndex: endIndex,
    
               pages: pages
    
           };
    
       }

       useEffect(()=>{
        if(done){

          const pages = getPager(25, 1, 10)
          setPages(pages.pages)
        }
        return(
          setDone(false)
        )
       },[done])


       useEffect(()=>{
         const some =getPager(25, page, 10);
         const some1 = some.currentPage;


         const start = (some1*10) - 10;
         const end = (some1*10) 

         const data11 = datas.slice(start, end);

        setData(data11);
       },[page])

      const precHandler = ()=>{
        if(page-1<0){
          setPage(page)
        }
        else{
          setPage(page-1)
        }
        
      }

      const nextHandler = ()=>{
        if(page+1>3){
          setPage(page)
        }
        else{
          setPage(page+1)
        }
      }
      
      const numHandler=(e)=>{
        const page = e.target.textContent;
        const start = (page*10) - 10;
        const end = (page*10) 

        const data11 = datas.slice(start, end)
        setData(data11)
      }
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
         <div className="ham" onClick={ham}>
            <li></li>
            <li></li>
            <li></li>
        </div>
    <Header/>

    <div className='bidHeader'>
      <li>FirstName</li>
      <li>LastName</li>
      <li>Email</li>
      <li>Premium</li>
      <li>Bid</li>
    </div>
    <div className="center-div">

    <div className='list-bid'>

      {
        data.map((index, item)=>{
          return (
            <Card index={index}/>
            )
          })
        } 
        </div>
    </div>
      
        <div className='pagi'>

          <button onClick={precHandler}>Prev</button>
          {pages.map((i)=>{
            return <button onClick={numHandler}>{i}</button>
          })}
          <button onClick={nextHandler}>Next</button>

        </div>
    </>
  );
}

export default Bid;
