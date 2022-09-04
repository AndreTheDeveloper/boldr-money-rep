import React, { Component } from "react";
import NavBar from "./NavBar";
import OurStoryMotive from "./OurStoryMotive";
import OurStoryTextSection from "./OurStoryTextSection";
import OurStoryThinMotive from "./OurStoryThinMotive";

class OurStory extends Component {
  render() {
    return (
      <>
        <NavBar />
        <OurStoryMotive />
        <OurStoryTextSection />
        <OurStoryThinMotive />
      </>
    );
  }
}

export default OurStory;