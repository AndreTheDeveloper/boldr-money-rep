import React, { Component } from "react";
import noFilterBar from '../Images/noFilterBar.png';
import noFilterStories1 from '../Images/noFilterStories1.png';
import noFilterStories2 from '../Images/noFilterStories2.png';
import noFilterStories3 from '../Images/noFilterStories3.png';
import noFilterStories4 from '../Images/noFilterStories4.png';

class Stories extends Component {
    render() {
      return (
        <>
        <div className = 'noFilterStories'>
            <h2>All</h2>
            <img src = {noFilterBar} alt = {'nav bar pic'} />
            <img src = {noFilterStories1} alt = {'stories'} />
            <img src = {noFilterStories2} alt = {'stories'} />
            <img src = {noFilterStories3} alt = {'stories'} />
            <img src = {noFilterStories4} alt = {'stories'} />
            <button className = 'storiesButton'>
                <p>Next</p>
            </button>
        </div>
        </>
      );
    }
  }
  
  export default Stories;