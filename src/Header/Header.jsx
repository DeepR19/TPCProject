import React from 'react'
import { Link } from 'react-router-dom';
import "../MainUI/main.css";

export default function Header() {
  return (
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

  )
}
