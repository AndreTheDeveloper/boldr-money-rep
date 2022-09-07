import React, { Component } from "react";
import HowItWorksHeading from "./HowItWorksHeading";
import NavBar from "./NavBar";
import BottomNav from "./BottomNav";
import MoneyGang from "./MoneyGang";
import Goals from "./Goals";

class HowItWorks extends Component {
  render() {
    return (
      <>
        <NavBar />
        <HowItWorksHeading />
        <MoneyGang />
        <Goals />
        <BottomNav />
      </>
    );
  }
}

export default HowItWorks;
