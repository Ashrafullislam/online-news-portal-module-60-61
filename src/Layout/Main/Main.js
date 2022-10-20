import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';
import LeftSideNav from '../../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Pages/Shared/RightSideNav/RightSideNav';
import './Main.css';


const Main = () => {
    return (
        <div>
         <Header> </Header>
             <Container  className='home-layout-container' >
                <Row> 
                    <Col lg='2' className='d-none d-lg-block'> 
                    <LeftSideNav> </LeftSideNav>
                    </Col>

                     <Col lg="7"> 
                         <Outlet> 
                             
                         </Outlet>
                     </Col>

                     <Col lg="3">
                         <RightSideNav> 

                         </RightSideNav>
                     </Col>
                </Row>
             </Container>
            
        </div>
    );
};

export default Main;