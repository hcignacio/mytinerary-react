import React, { Component } from 'react'
import "./NavbarMain.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default class NavbarMain extends Component {
  render() {
    return (
      <div className="MainNavbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">


          <button className="btn bg-dark border-0 mr-3" data-toggle="collapse" data-target="#menu">
            <Link to="/" className="text-white Home">
              Home
            </Link>
          </button>

          <Nav className="mr-auto">
            <NavDropdown title="User" id="collasible-nav-dropdown" className="NavMainDrop">
              <Link className="dropdown-item" role="button" to="/login">
                Log in
              </Link>
              <Link className="dropdown-item" role="button" to="/create-account">
                Create account
              </Link>
            </NavDropdown>
          </Nav>
          <div className="NavOption">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="my-3 nav-list">
                <button className="btn bg-dark border-0 mr-3" data-toggle="collapse" data-target="#menu">
                  <Link to="/cities" className="text-white Home">
                    Cities
                  </Link>
                </button>
                <button className="btn bg-dark border-0 mr-3" data-toggle="collapse" data-target="#menu">
                  <Link to="/about" className="text-white Home">
                    About Us
                  </Link>
                </button>
                {/* <Link to="/cities" className="text-right">Cities</Link>
                <Link to="/about" className="text-right">About Us</Link> */}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}