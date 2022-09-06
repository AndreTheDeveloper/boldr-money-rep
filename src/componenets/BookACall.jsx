import React, { Component } from "react";
import NavBar from "./NavBar";
import BottomNav from "./BottomNav";
import Schedule from './Schedule'
class BookACall extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Schedule />
        <BottomNav />
      </>
    );
  }
}

export default BookACall;
