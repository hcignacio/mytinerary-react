import React, { Component } from 'react'
import "./SectionCenter.css";
import arrow from "../../../../img/circled-right-2.png";
import { Link } from 'react-router-dom';

export default class SectionCenter extends Component {
  render() {
    return (
      <div className="SectionCenterStyle px-4">
        <p className="Slogan text-center">
          Find you perfect trip, designed by insiders
          who know and love thier cities
        </p>
        <div className="row justify-content-center my-2">
          <Link to="/cities" >
            <img src={arrow} alt="Logo" className="ArrowImage" />
          </Link>

        </div>
      </div>
    )
  }
}
