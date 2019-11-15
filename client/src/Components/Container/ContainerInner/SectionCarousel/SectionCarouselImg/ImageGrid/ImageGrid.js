import React, { Component } from 'react'
import "./ImageGrid.css";

export default class ImageGrid extends Component {

  fourImages() {
    return this.props.imgsel.map((img, index) => {
      return <div className="col-6 m-0 p-0" key={index}><img className="img-fluid CarouselImg" src={img} alt={index} /></div>
    })
  }

  render() {
    return (
      <div className="row justify-content-center mb-0">
        {this.fourImages()}
      </div>
    )
  }
}
