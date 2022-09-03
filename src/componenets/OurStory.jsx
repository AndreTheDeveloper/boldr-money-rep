import React, { Component } from "react";
import NavBar from "./NavBar";

class OurStory extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className = "ourStoryMotive">
            <div className = "ourStoryMotiveHeader"><h1>We're on a misson to make money more human</h1></div>
        </div>
      </>
    );
  }
}

export default OurStory;