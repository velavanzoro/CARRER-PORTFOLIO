import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; // Custom styles here

const PortfolioNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`glass-navbar ${scrolled ? 'scrolled' : ''} animate-fade-in`}
    >
      <Container>
        {/* Brand logo and name */}
        <Navbar.Brand
          href="#home"
          className="brand-name d-flex align-items-center"
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            letterSpacing: '0.5px',
          }}
        >
          <img
            src="/portfolio-white.png" // Make sure this image is in /public
            alt="logo"
            style={{
              width: '34px',
              height: '34px',
              marginRight: '10px',
              filter: 'brightness(0) invert(1)',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = 'rotate(20deg) scale(1.1)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = 'rotate(0deg) scale(1)')
            }
          />
          My Portfolio
        </Navbar.Brand>

        {/* Hamburger icon */}
        <Navbar.Toggle aria-controls="navbar-nav" style={{ border: 'none' }} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
            <Nav.Link href="#languages">Languages</Nav.Link>
            <Nav.Link href="#extracurricular">ExtraCurricular</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
