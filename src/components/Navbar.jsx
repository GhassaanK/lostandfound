import React from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MyNavbar = () => {
  return (
    <div className="container-fluid sticky-top Navbar">
      <BootstrapNavbar expand="lg" variant="light">
        <BootstrapNavbar.Brand className="logo me-auto" href='/'><h4>SMIU ~ Lost & Found</h4></BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarNav" />
        <BootstrapNavbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link className="myLinks" href="#home" style={{ marginRight: '3rem' }}>Home</Nav.Link>
            <Nav.Link className="myLinks" href="#about" style={{ marginRight: '3rem' }}>Report a lost item</Nav.Link>
            <Nav.Link className="myLinks" href="#team" style={{ marginRight: '3rem' }}>Report a found item</Nav.Link>
            <Nav.Link className="myLinks" href="#portfolio" style={{ marginRight: '3rem' }}>Register</Nav.Link>
            <Nav.Link className="myLinks" href="#contact">Login</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

export default MyNavbar;
