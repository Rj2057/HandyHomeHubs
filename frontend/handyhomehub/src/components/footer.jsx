import React from 'react'
import { MdEmail  } from "react-icons/md";
import { HiPhone , HiBuildingOffice2} from "react-icons/hi2";
import {Link} from 'react-router-dom';
import './footer.css'

export default function footer() {
  return (
    <footer>
        <div className="containers">
        <div className="footers-content">
              <h3>Company</h3>
              <div className="contacts-item mx-5 d-flex align-items-center">
                <MdEmail className="icon" />
                <span>handyhomehub@gmail.com</span>
              </div>
              <div className="contacts-item mx-5 d-flex align-items-center">
                <HiPhone className="icon" />
                <span>+91 1234567890</span>
              </div>
              <div className="contacts-item mx-5 d-flex align-items-center">
                <HiBuildingOffice2 className="icon" />
                <span>H-section, 1st Floor, BE block PES University, Bangalore</span>
              </div>
        </div>
        <div className="footers-content">
                <h3>Quick Links</h3>
                 <ul className="list">
                    <li><a href="/" className="list-link"><Link style={{textDecoration:"none"}} to="/">Home</Link></a></li>
                    <li><a href="/" className="list-link"><Link style={{textDecoration:"none"}} to="/about-us">About</Link></a></li>
                    <li><a href="/" className="list-link"><Link style={{textDecoration:"none"}} to="/">Services </Link></a></li>
                    <li><a href="/" className="list-link">Contact</a></li>
                 </ul>
        </div>
        <div className="footers-content">
          <h3>Help Center</h3>
          <ul className="help-list">
            <li><a href="/faqs" className="help-link">FAQs</a></li>
            <li><a href="/terms-and-conditions" className="help-link"><Link style={{textDecoration:"none"}} to="/terms">Terms and Conditions</Link></a></li>
            <li><a href="/how-it-works" className="help-link">How It Works</a></li>
            <li><a href="/privacy" className="help-link"><Link style={{textDecoration:"none"}} to="/privacy">Privacy</Link></a></li>
          </ul>
        </div>

        </div>
        <div className="bottom-bar">
            <p>&copy; 2024 your company . All rights reserved</p>
        </div>
    </footer>
  )
}
