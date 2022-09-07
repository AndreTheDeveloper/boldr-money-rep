import React, { Component } from "react";
import HowItWorksHeading from "./HowItWorksHeading";
import NavBar from "./NavBar";
import BottomNav from './BottomNav';

class HowItWorks extends Component {
  render() {
    return (
      <>
        <NavBar />
        <HowItWorksHeading />
        <BottomNav />
      </>
    );
  }
}

export default HowItWorks;
