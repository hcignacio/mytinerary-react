import React, { Component } from 'react';
import "./Cities.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { CityAction } from '../../../../store/actions/cityActions'

class Cities extends Component {

  constructor() {
    super();
    this.state = {
      cities: [],
      filteredCities: [],
      dataFetched: false
    }
  }

  async componentDidMount() {
    await this.props.getCities()
    /* console.log(this.props.cities); */
  }

  cityList(cities) {
    /* let listToRender = this.state.filteredCities; */
    let listToRender = cities;
    /* this.filterCities(cities); */
    return listToRender.map(city => {
      let link = "/" + city.name.toLowerCase();
      return <li className="CityListItem text-center m-1" key={city.name}>
        <Link to={link}>
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

  /* fetchCities = () => {
    fetch('/cities')
      .then(response =>
        response.json())
      .then(cities => this.setState({ cities }))
      .then(() => this.setState({ filteredCities: this.state.cities }))
      .catch(e => console.log(e));
  } */


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
    this.filterCities(e.target.value)
  }

  render() {

    console.log("CITIES TO RENDER", this.props.cities)
    return (
      < div >
        <div className="row m-0 p-0">
          <span className="col-6 offset-3 col-sm-6 p-0">
            <input type="text" id="filter" placeholder="ej: Buenos Aires"
              ref="CityInput"
              className="text-center CityInput"
              onChange={this.handleChange} />
          </span>
        </div>

        {(this.props.cities.length === 0) ? (
          <h5 style={{ textAlign: "center" }}>Loading cities...</h5>) :
          this.state.filteredCities.length === 0 ?
            (<ul className="mx-0 mt-4 mb-2 p-0">
              {this.cityList(this.props.cities)}
            </ul>) :
            (<div>
              {this.noCity()}
            </div>)
        }

        {/* <ul className="mx-0 mt-4 mb-2 p-0">
          {this.cityList(this.props.cities)}
        </ul>

        <div>
          {this.noCity()}
        </div> */}
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cityReducer.cities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCities: () => {
      dispatch(CityAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
