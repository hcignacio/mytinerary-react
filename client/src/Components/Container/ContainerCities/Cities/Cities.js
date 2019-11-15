import React, { Component } from 'react'
import "./Cities.css"
import { Link } from 'react-router-dom';

export default class Cities extends Component {

  constructor() {
    super();
    this.state = {
      cities: [],
      filteredCities: []
    }
  }

  /* componentWillMount() {
    this.setState({
      cities,
      filteredCities: cities
    })
  } */

  componentDidMount() {
    this.fetchCities()
    /* this.timer = setInterval(() => this.fetchCities(), 1000); */
    /* this.setState({ filteredCities: this.state.cities }) */
  }

  componentWillUnmount() {
    this.timer = null;
  }

  cityList() {
    let listToRender = this.state.filteredCities;
    /*  if (this.refs.CityInput.value==="") {
       listToRender =  this.state.cities
     }
     else {
       listToRender = this.state.filteredCities
     } */
    return listToRender.map(city => {
      let link = "/" + city.name;
      return <li className="CityListItem text-center m-1" key={city.name}>

        <Link to={link} className="">
          <button className="CountryBtn">
            {city.name}
          </button>
        </Link>
      </li>
    })
  }

  noCity() {
    if (this.state.filteredCities.length === 0) {
      return <div className="NoCityDiv"> <h5 className="text-center align-self-center">Sorry, no city found :/</h5> </div>
    }
  }

  fetchCities = () => {
    fetch('/cities/all')
      .then(response =>
        response.json())
      .then(cities => this.setState({ cities }))
      .then(() => this.setState({ filteredCities: this.state.cities }))
      .catch(e => console.log(e));
  }


  filterCities = (cityFilter) => {
    let filteredCities = this.state.cities
    filteredCities = filteredCities.filter((city) => {
      let cityName = city.name.toLowerCase()
      return cityName.indexOf(
        cityFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredCities
    })
  }

  handleChange = (e) => {
    /* this.setState({
      poetFilter: e.target.value
    }) */
    this.filterCities(e.target.value)
  }

  render() {
    return (
      <div>

        {/* <label htmlFor="filter">Filter: </label> */}
        <div className="row m-0 p-0">
          <span className="col-6 offset-3 col-sm-6 p-0">
            <input type="text" id="filter" placeholder="ej: Buenos Aires"
              ref="CityInput"
              className="text-center CityInput"
              onChange={this.handleChange} />
          </span>
        </div>

        <ul className="mx-0 mt-4 mb-2 p-0">
          {this.cityList()}
        </ul>

        <div>
          {this.noCity()}
        </div>
      </div>
    )
  }
}
