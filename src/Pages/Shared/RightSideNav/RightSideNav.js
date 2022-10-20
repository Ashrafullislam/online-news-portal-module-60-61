import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle,FaGithub ,FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaYoutube ,FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <h3> Right Side Nav </h3>
            <div className="d-grid gap-2 mt-4 ">
            <Button variant="outline-primary" size="lg">
               <FaGoogle> </FaGoogle> Log in with google 
            </Button>
            <Button variant="outline-secondary" size="lg">
              <FaGithub> </FaGithub> Log in with github
           </Button>
         </div>

    <div>
    <h4 variant="mt-3" className='mt-4' > Find Us  On  </h4> 
    
      <ListGroup>
      <ListGroup.Item action variant="primary mt-2"> <FaFacebook> </FaFacebook> Facebook </ListGroup.Item>
      <ListGroup.Item action variant="secondary mt-2"> <FaTwitter> </FaTwitter>  Twitter  </ListGroup.Item>
      <ListGroup.Item action variant="primary mt-2"> <FaInstagram> </FaInstagram> Instagram  </ListGroup.Item>

      <ListGroup.Item action variant="primary mt-2"> <FaWhatsapp > </FaWhatsapp>  Whatsapp  </ListGroup.Item>
      
      <ListGroup.Item action variant="secondary mt-2"> <FaLinkedin> </FaLinkedin>  Linkdin </ListGroup.Item>
      <ListGroup.Item action variant="secondary mt-2 "> <FaYoutube> </FaYoutube> Youtube  </ListGroup.Item>
    
    </ListGroup>

        <div className='mt-4'> 
            <BrandCarousel> </BrandCarousel>
        </div>

         </div>
        </div>
    );
};

export default RightSideNav;