import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';

const Main = () => {
    return (
        <Container>
            <Header />
            <div>
                <Row>
                    <Col sm={3}><LeftNav /></Col>
                    <Col sm={6}>Main Content comming soon <Outlet /></Col>
                    <Col sm={3}><RightNav /></Col>
                </Row>
            </div>
            <Footer />
        </Container>
    );
};

export default Main;