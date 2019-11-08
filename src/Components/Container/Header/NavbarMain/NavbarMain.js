import React, { Component } from 'react'
import "./NavbarMain.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavbarMain extends Component {
  render() {
    return (
      <div className="MainNavbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Nav className="mr-auto">
            <NavDropdown title="User" id="collasible-nav-dropdown" className="NavMainDrop">
              <NavDropdown.Item href="#">Create account</NavDropdown.Item>
              <NavDropdown.Item href="#">Log in</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="NavOption">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="#" className="text-right">Option 1</Nav.Link>
                <Nav.Link href="#" className="text-right">Option 2</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}