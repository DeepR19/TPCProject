import React from 'react'
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';

import Bid from "./BidData/Bid";
import HomeUI from "./MainUI/HomeUI"
import ErrPage from './ErrPage/ErrPage';
import SelectBid from "./SelectedBid/SelectBid"
import Support from './support/Support';
export default function App() {
  return (
    <Router>
        <Routes>
          
          <Route exact path="/bid" element={<Bid/>}/>
          <Route exact path="/bid/:id" element={<SelectBid/>}/>
          <Route exact path="/" element={<HomeUI/>}/>
          <Route exact path="/supp" element={<Support/>}/>
         
          <Route path="*" element={<ErrPage/>}/>
        </Routes>
      </Router>
  )
}
