import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <section className='mt-4'>
            <div>
                <h4>Login With</h4>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            </div>
            <div className='mt-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone />
            <div>
                <img className='w-100' src={bg} alt="" />
            </div>
        </section>
    );
};

export default RightNav;