import React, { Component } from "react";
import NavBar from "./NavBar";
import BottomNav from "./BottomNav";
import NoFilterBanner from './NoFilterBanner';
import FeaturedPost from './FeaturedPost';
import Stories from './Stories';

class NoFilter extends Component {
  render() {
    return (
      <>
        <NavBar />
          <NoFilterBanner />
          <FeaturedPost />
          <Stories />
        <BottomNav />
      </>
    );
  }
}

export default NoFilter;
