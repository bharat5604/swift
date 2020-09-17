import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import dot from './dot.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            {/* Navbar start */}
            <Navbar  className="header__nav" expand="lg">
                {/* <Navbar.Brand href="#home"><img src={logo} width={100} alt="logo" /></Navbar.Brand> */}
                <div className="container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#"><span>Upcoming <img src={dot} width={10} alt=""/></span> Live Consultation</Nav.Link>
                            <Nav.Link href="#">Buy Plans</Nav.Link>
                            <Nav.Link href="#">View Plans</Nav.Link>
                            <Nav.Link className="header__login" href="#">Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            {/* Navbar end */}
        </div>
    )
}

export default Header
