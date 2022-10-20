import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaHeadset,FaUserAlt } from "react-icons/fa";


const Header = () => {
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> Online News Portal </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News </Nav.Link>
            <Nav.Link href="#pricing"> Home </Nav.Link>
            <NavDropdown title=" Category" id="collasible-nav-dropdown"> 
       
              <NavDropdown.Item href="#action/3.1"> Breaking News  </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Regular News 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Sport News </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                International News
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"> About  </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                <FaUserAlt> </FaUserAlt>
            </Nav.Link>
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