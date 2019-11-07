import React, { Component } from 'react'
import "./Header.css";
import NavbarMain from './NavbarMain/NavbarMain'

export default class Header extends Component {
  render() {
    return (
      <div className="MainHeader">
        <NavbarMain />
      </div>
    )
  }
}
