import React, { Component } from "react";

class HowItWorksHeading extends Component {
  render() {
    return (
      <div className="howItWorksHeading">
        <div className="howItWorksHeadingGrid">
          <div className="howItWorksHeadingLeft">
            <div className="howItWorksHeadingTitle">
              Simplify your <span className="hiwhUnderline">money</span> life
            </div>
            <div className="hiwhDesc">
              Bolder combines personal money coaching with the resources you
              need to build wealth, and reach your financial, and life goals
              faster.
            </div>
          </div>
          <div className="howItWorksHeadingRight">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/6176e15e800a35cbc92a9fa6_image-howitworks-cover-mobile.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorksHeading;
