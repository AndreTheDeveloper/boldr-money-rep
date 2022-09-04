import React, { Component } from "react";
import NavBar from "./NavBar";
import OurStoryMotive from "./OurStoryMotive";
import OurStoryTextSection from "./OurStoryTextSection";

class OurStory extends Component {
  render() {
    return (
      <>
        <NavBar />
        <OurStoryMotive />
        <OurStoryTextSection />
      </>
    );
  }
}

export default OurStory;