import React, { Component } from "react";

const checkMk = (
  <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/613c869d66b46f2d536bdc8e_check_circle.svg" />
);

class InvestYourself extends Component {
  render() {
    return (
      <div className="investYourselfContainer">
        <div className="investYourselfGrid">
          <div className="investLeft">
            <div className="investTitle">Invest in <span className = "investUnderline">yourself</span></div>
            <div className="investDesc">
              No judgement. No budgeting. No financial lingo. For <span className = 'amountColor'>$58/month</span>,
              here's how you become Bolder:
            </div>
            <div className="investDescList">
              <div className="investListItem">
                {checkMk} 2 Week <span className="investBold"> FREE </span>{" "}
                Trial
              </div>
              <div className="investListItem">
                {checkMk} 1-on-1 Money Coaching
              </div>
              <div className="investListItem">
                {checkMk} Personalized Money Plan
              </div>
              <div className="investListItem">
                {checkMk} Monthly Money Dates
              </div>
              <div className="investListItem">
                {checkMk} Your Money Community
              </div>
              <div className="investListItem">
                {checkMk} Money Masterclasses
              </div>
            </div>
          </div>
          <div className="investRight">
            <img src="https://uploads-ssl.webflow.com/6107e08479e329549563291a/613f6600a42b817bcb1983f9_image-join-bolder-p-1080.jpeg" />
          </div>
        </div>
      </div>
    );
  }
}

export default InvestYourself;
