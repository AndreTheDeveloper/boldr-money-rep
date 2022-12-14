import React, { Component } from "react";
import NavBar from "./NavBar";
import OurStoryMotive from "./OurStoryMotive";
import OurStoryTextSection from "./OurStoryTextSection";
import OurStoryThinMotive from "./OurStoryThinMotive";
import OurStoryHumansFirst from "./OurStoryHumansFirst";
import OurStorySpeakingOfWe from "./OurStorySpeakingOfWe";
import BottomNav from "./BottomNav";

class OurStory extends Component {
  render() {
    return (
      <>
        <NavBar />
        <OurStoryMotive />
        <OurStoryTextSection />
        <OurStoryThinMotive />
        <OurStoryHumansFirst/>
        <OurStorySpeakingOfWe />
        <BottomNav />
      </>
    );
  }
}

export default OurStory;
