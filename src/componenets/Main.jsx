import React, { Component } from "react";
import NavBar from "./NavBar";
import Motive from "./Motive";
import AsSeenIn from "./AsSeenIn";
import Messages from "./Messages";

class Main extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Motive />
        <AsSeenIn />
        <Messages />
      </>
    );
  }
}

export default Main;
