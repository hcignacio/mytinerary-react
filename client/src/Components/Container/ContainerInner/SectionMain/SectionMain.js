import React, { Component } from 'react'
import "./SectionMain.css";
import logo from "../../../../img/MYtineraryLogo.png"

export default class SectionMain extends Component {
  render() {
    return (
      <div className="SectionMainStyle mt-4 mb-3 col-sm-4 offset-sm-4 justify-content-center d-flex">
        <img src={logo} alt="Logo" className="MainLogo mw-50" />
      </div>
    )
  }
}
