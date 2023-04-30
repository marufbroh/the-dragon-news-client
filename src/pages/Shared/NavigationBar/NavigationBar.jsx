import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <Navbar className='mt-4' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex gap-3">
                            <Link to={"/"} >Home</Link>
                            <Link to={"/"} >About</Link>
                            <Link to={"/"} >Career</Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link><FaUserCircle style={{ fontSize: "2rem" }} /></Nav.Link>}
                            
                            {
                                user ? <Button variant="secondary">Log Out</Button> : <Link to={"/login"}><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;