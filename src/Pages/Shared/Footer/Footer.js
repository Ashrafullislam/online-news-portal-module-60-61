import React from 'react';
import { FaCopyright } from "react-icons/fa" ; 
import './Footer.css'; 


const Footer = () => {
    return (
        <div className='footer '>
     
          <div>
             <h5>  Copyright warning <FaCopyright > </FaCopyright> </h5>
             <p className='text-light'> <small> All rights reserved by Ashrafull  </small> </p>
          </div>
           
        </div>
    );
};

export default Footer;