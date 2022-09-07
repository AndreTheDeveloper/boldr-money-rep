import React, { Component } from "react";

class Goals extends Component {
  render() {
    return (
      <div className="goalsContainer">
        <div className="goalsHeader">
          We help you build a powerful and healthy relationship with money, so
          you can...
        </div>
        <div className="goalsGrid">
          <div className="goalsImg">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/6165d9593eba1bbb57eb150d_image-howitworks-potential-p-1080.jpeg" />
          </div>
          <div className="goalsDesc">
            <div className="goalsDescGrid">
              <div className="goalsDescGridL">
                <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/613c869d66b46f2d536bdc8e_check_circle.svg" />
                <br />
                <br />
                <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/613c869d66b46f2d536bdc8e_check_circle.svg" />
                <br />
                <br />
                <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/613c869d66b46f2d536bdc8e_check_circle.svg" />
                <br />
                <br />
                <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/613c869d66b46f2d536bdc8e_check_circle.svg" />
                <br />
                <br />
                <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/613c869d66b46f2d536bdc8e_check_circle.svg" />
              </div>
              <div className="goalsDescGridR">
                <div className="goalsDescR">Save more, faster</div>
                <br />
                <div className="goalsDescR">Invest, and build wealth</div>
                <br />
                <div className="goalsDescR">Paydown, and stay debt free</div>
                <br />
                <div className="goalsDescR">
                  Talk about money like an expert
                </div>
                <br />
                <div className="goalsDescR">
                  Have those awkward money conversations with confidence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goals;
