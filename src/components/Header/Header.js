import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import logo from '..//../assets/images/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" style={{backgroundColor: "lightblue", color: "black"}}>
      <Navbar.Brand href="/">
        <img src={logo} alt="Company Logo" className="logo-image" />
        Pixar
      </Navbar.Brand>
      <Navbar.Toggle onClick={handleToggle} />
      <Navbar.Collapse className={expanded ? 'show' : ''}>
        <Nav className="ml-auto">

        <Nav.Link as={Link} to="/homepage"><b>Home</b></Nav.Link>
        <Nav.Link as={Link} to="/aboutuspage"><b>About Us</b></Nav.Link>
        <Nav.Link as={Link} to="/servicespage"><b>Services</b></Nav.Link>      
        <Nav.Link as={Link} to="/newspage"><b>News</b></Nav.Link>
        <Nav.Link as={Link} to="/contactpage"><b>Contact</b></Nav.Link>
        


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
