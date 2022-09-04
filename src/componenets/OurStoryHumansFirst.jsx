import React, { Component } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

class OurStoryHumansFirst extends Component {
  render() {
    return (
      <div className="ourStoryHumansFirstContainer">
        <div className="ourStoryHumansFirstScroll">
          <h2>Humans first. Coaches second</h2>
          <Splide
            options={{
              perPage: 6,
              arrows: true,
              pagination: false,
              padding: {right: '15rem'}, 
              drag: false,
            }}>
          
            <SplideSlide>
              <div className="coach1"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="coach2"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="coach3"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="coach4"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="coach5"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="coach6"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="coach7"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="coach8"></div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    );
  }

}

export default OurStoryHumansFirst;