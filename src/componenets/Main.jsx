import React, { Component } from "react";
import NavBar from "./NavBar";
import Motive from "./Motive";
import AsSeenIn from "./AsSeenIn";



class Main extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Motive />
        <AsSeenIn />
      </>
      
    );
  }

}

export default Main;
