import React, { Component } from 'react'
import "./SectionCenter.css";
import arrow from "../../../../img/circled-right-2.png";

export default class SectionCenter extends Component {
  render() {
    return (
      <div className="SectionCenterStyle">
        <p className="Slogan text-center">
          Find you perfect trip, designed by insiders
          who know and love thier cities
        </p>
        <div className="row justify-content-center">
          <img src={arrow} alt="Logo" className="ArrowImage" />
        </div>
      </div>
    )
  }
}
