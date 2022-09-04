import React, { Component } from "react";
import NavBar from "./NavBar";
import Motive from "./Motive";
import AsSeenIn from "./AsSeenIn";
import Messages from "./Messages";
import Quotes from "./Quotes";
import Bolder from "./Bolder";
import MPHowItWorks from "./MPHowItWorks";
import FinancialPotential from "./FinancialPotential";
import BetterOff from "./BetterOff";
import Employees from "./Employees";

class Main extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Motive />
        <AsSeenIn />
        <Messages />
        <Quotes />
        <Bolder />
        <MPHowItWorks />
        <FinancialPotential />
        <BetterOff />
        <Employees />
      </>
    );
  }
}

export default Main;
