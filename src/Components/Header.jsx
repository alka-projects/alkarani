import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react'
import '../Components-css/Header.css'
import Headerjumbo from './Headerjumbo'
import Component from './logo.png'
import Button from 'react-bootstrap/Button'


function Header() {
    return (
        <>
        <Navbar expand="md" collapseOnSelect bg="" fixed="top" variant="light" className="p-4">
          <Navbar.Brand href="#home" className="p-4">
          <img alt="not found"  src={Component} width="60" height="60"/>{' '}
           <span className="name">Alka</span> 
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="p-4 link">Home</Nav.Link>
            <Nav.Link href="#skills" className="p-4 link">Skills</Nav.Link>
            <Nav.Link href="#works" className="p-4 link">Works</Nav.Link>
            <Nav.Link href="#education" className="p-4 link">Education</Nav.Link>
            <Nav.Link href="#letstalk" className=""><Button variant="light" className="bt ml-4 mr-4 pt-3 pb-3 pl-4 pr-4">Let's Talk</Button></Nav.Link>

          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Headerjumbo/>
      </>
    )
}

export default Header
