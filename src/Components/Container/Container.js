import React, { Component } from 'react'
import "./Container.css";
import Header from './Header/Header';
import ContainerInner from './ContainerInner/ContainerInner';
import Footer from './Footer/Footer';

export default class Container extends Component {
    render() {
        return (
            <div className="MainContainer">
                <Header />
                <ContainerInner />
                <Footer />
            </div>
        )
    }
}
