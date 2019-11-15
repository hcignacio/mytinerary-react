import React, { Component } from 'react'
import './SectionCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./SectionCarouselImg/img-bc.jpg";
import img2 from "./SectionCarouselImg/img-ny.jpg";
import img3 from "./SectionCarouselImg/img-am.jpg";
import img4 from "./SectionCarouselImg/img-ps.jpg";
import img5 from "./SectionCarouselImg/img-ba.jpg";
import img6 from "./SectionCarouselImg/img-hk.jpg";
import img7 from "./SectionCarouselImg/img-mc.jpg";
import img8 from "./SectionCarouselImg/img-rj.jpg";
import img9 from "./SectionCarouselImg/img-mw.jpg";
import img10 from "./SectionCarouselImg/img-cr.jpg";
import img11 from "./SectionCarouselImg/img-ln.jpg";
import img12 from "./SectionCarouselImg/img-ch.jpg";
import ImageGrid from './SectionCarouselImg/ImageGrid/ImageGrid';

let imgs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
]

export default class SectionCarousel extends Component {

  render() {
    return (
      <div className="SectionCarouselStyle">
        <p className="text-left text-white bg-dark m-0 pl-2 pb-1">Popular MYtineraries</p>

        <div className="DivCarousel">
          <Carousel className="mh-100">

            <Carousel.Item>
              <ImageGrid imgsel={imgs.slice(0, 4)} />
            </Carousel.Item>

            <Carousel.Item>
              <ImageGrid imgsel={imgs.slice(4, 8)} />
            </Carousel.Item>

            <Carousel.Item>
              <ImageGrid imgsel={imgs.slice(2, 6)} />
            </Carousel.Item>

          </Carousel>
        </div>

      </div >
    )
  }
}
