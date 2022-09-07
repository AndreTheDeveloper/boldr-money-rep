import React, { Component } from "react";
import HowItWorksHeading from "./HowItWorksHeading";
import NavBar from "./NavBar";
import BottomNav from "./BottomNav";
import MoneyGang from "./MoneyGang";

class HowItWorks extends Component {
  render() {
    return (
      <>
        <NavBar />
        <HowItWorksHeading />
        <MoneyGang />
        <BottomNav />
      </>
    );
  }
}

export default HowItWorks;
