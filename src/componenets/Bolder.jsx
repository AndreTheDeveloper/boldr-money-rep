import React, { Component } from "react";

class Bolder extends Component {
  render() {
    return (
      <div className="bolderContainer">
        <div className="bolderGrid">
          <div className="bolder-item">
            <div className="bolderTitle">
              What if you were{" "}
              <div className="bolderHighlighted">
                <span class="highlight-container">
                  <span class="highlight">Bolder?</span>
                </span>
              </div>
              <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/614331a038c80cf3982f3287_arrow-right-2.svg" />
            </div>
          </div>
          <div className="bolder-item">
            <div className="bolderText">
              <ul>
                <li>
                  Money shouldn’t hold you back — it should take you places.
                </li>
                <li>Go on that adventure</li>
                <li>Work remotely forever.</li>
                <li>Start that company.</li>
                <li>Quit your toxic job.</li>
                <li>Leave your crappy relationship.</li>
                <li> Do it all with a personal coach by your side.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bolder;
