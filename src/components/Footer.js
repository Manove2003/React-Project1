import "./FooterStyles.css";
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
              <div>
                <p>123 Housing Society.</p>
                <p>Bangladesh.</p>
              </div>
            </div>
            <div className="phone">
              <h4> 
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} /> 
                 1-2323-343-23   
              </h4>
            </div>
            <div className="email">
              <h4> 
                <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} /> 
                  info@gmail.com   
              </h4>
            </div>
            
          </div>
          <div className="right">
            <h4>About the Company</h4>
            <p>This is me Manove Kumar. CEO and Founder of MK Tech. I enjoy discussing new project and design challenges.  </p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} /> 
            <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} /> 
            <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} /> 

            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
