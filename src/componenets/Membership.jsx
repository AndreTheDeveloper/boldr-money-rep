import React, { Component } from "react";
import benefits from '../Images/benefits.png';
import pricing from "../Images/pricing.png";

class Membership extends Component {
  render() {
    return (
    <div className="membershipContainer">
        <h2>Our Membership Plans</h2>
        <div className = 'membershipGrid'>
            <div className = "membershipGridLeft">
                <p>We combine practical financial guidance with behavioral and emotional support to help you achieve your goals.</p>
                <img src = {benefits} alt = {'benefits'} />
            </div>
            <div className = "membershipGridRight">
                <img src = {pricing} alt = {"prices"} />
            </div>
        </div>

    </div>  
    );
  }
}

export default Membership;
