import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserAlt } from "react-icons/fa" ; 
import { Link, NavLink } from 'react-router-dom';
import './Header.css' ;  


const Header = () => {

  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >  <Link to= '/' className='text-light text-decoration-none'>  Online News Portal </Link>   </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex align-items-center">
            <NavLink className= 'text-light' to = '/' >All News </NavLink>
            <NavLink to = '/' className = 'text-light' > Home </NavLink>
            <NavLink className= 'text-light'> About  </NavLink>
            <NavDropdown  title=" Category" id="collasible-nav-dropdown"> 
       
              <NavDropdown.Item href='http://localhost:3000/category/01' > Breaking News  </NavDropdown.Item>
              <NavDropdown.Item >  Regular News </NavDropdown.Item>
              <NavDropdown.Item href ='http://localhost:3000/category/02' > Sport News </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="http://localhost:3000/category/03">
                International News
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
          
            <NavLink eventKey={2} href="#memes">
            <FaUserAlt className='text-light' > </FaUserAlt>
            </NavLink>
            </Nav>
      
          <div className='d-lg-none'>
            <LeftSideNav> </LeftSideNav>
          </div>
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
};

export default Header;