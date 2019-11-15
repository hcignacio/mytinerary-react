import React, { Component } from 'react'
import './ContainerInner.css';
import SectionMain from './SectionMain/SectionMain';
import SectionCenter from './SectionCenter/SectionCenter';
import SectionCarousel from './SectionCarousel/SectionCarousel';

export default class ContainerInner extends Component {
    render() {
        return (
            <div className="ContainerInnerMain">
                <SectionMain />
                <SectionCenter />
                <SectionCarousel />
            </div>
        )
    }
}
