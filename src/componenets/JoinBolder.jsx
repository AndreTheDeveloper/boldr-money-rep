import React, { Component } from "react";
import NavBar from "./NavBar";
import BottomNav from "./BottomNav";
import Membership from "./Membership";
class JoinBolder extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Membership />
        <BottomNav />
      </>
    );
  }
}

export default JoinBolder;
