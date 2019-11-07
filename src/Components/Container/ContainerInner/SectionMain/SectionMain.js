import React, { Component } from 'react'
import "./SectionMain.css";
import logo from "../../../../img/MYtineraryLogo.png"

export default class SectionMain extends Component {
    render() {
        return (
            <div className="SectionMainStyle">
                <img src={logo} alt="Logo" className="MainLogo" />
            </div>
        )
    }
}
