import React, { Component } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

class Employees extends Component {
  render() {
    return (
      <div className="employeesContainer">
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: true,
            snap: true,
            gap: "-35rem",
            direction: "ltr",
            type: "slide",
            focus: 1,
            trimSpace: false,
          }}
        >
          <SplideSlide>
            <div className="employeePic1"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="employeePic2"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="employeePic3"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="employeePic4"></div>
          </SplideSlide>
        </Splide>
      </div>
    );
  }
}

export default Employees;
