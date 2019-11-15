import React, { Component } from 'react'
import Cities from './Cities/Cities'
import './ContainerCities.css'

export default class ContainerCities extends Component {
    render() {
        return (
            <div className="DivContCities">
                <h4 className="text-center m-4">You can filter our current cities!</h4>
                <Cities />
            </div>
        )
    }
}
