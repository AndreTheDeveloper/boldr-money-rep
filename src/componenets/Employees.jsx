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
            <div className="employeePic1">
              <div className="employeeDesc">
                Georgi started a side hustle and saved over $15k to buy a van
                and live the #vanlife
              </div>
              <div className="employeeName">GEORGI, DENVER, 29</div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="employeePic2">
              <div className="employeeDesc">
                Mal added an addiotional stream of income, began investing and
                building wealth
              </div>
              <div className="employeeName">MAL, CLEVELAND, 35</div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="employeePic3">
              <div className="employeeDesc">
                Tracy rebounded from losing her job and paid off over $12k in
                debt and saved over $20k
              </div>
              <div className="employeeName">TRACY, CLEVELAND, 38</div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="employeePic4">
              <div className="employeeDesc">
                Trisha expanded her business and saved enough to move to Europe
                and take time off to travel
              </div>
              <div className="employeeName">TRISHA, NEW YORK, 34</div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    );
  }
}

export default Employees;
