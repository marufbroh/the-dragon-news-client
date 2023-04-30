import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/Shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <Container>
            <Header />
            <div>
                <Row>
                    <Col sm={9}><Outlet /></Col>
                    <Col sm={3}><RightNav /></Col>
                </Row>
            </div>
            <Footer />
        </Container>
    );
};

export default NewsLayout;