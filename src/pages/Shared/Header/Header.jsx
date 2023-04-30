import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <header className='my-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary p-2 rounded'>
                <Button variant="danger">Latest</Button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </header>
    );
};

export default Header;