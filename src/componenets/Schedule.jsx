import React, { Component } from "react";
import scheduleBanner from '../Images/scheduleBanner.png';
import schedule from "../Images/schedule.png";
import callReviews from '../Images/callReviews.png';

class Schedule extends Component {
  render() {
    return (
    <div className="scheduleContainer">
        <div className = 'scheduleGrid'>
            <h2>Come Talk To Us</h2>
            <img src = {scheduleBanner} alt = {'Schedule Banner'} />
            <img src = {schedule} alt = {"Calender"} />
            <img src = {callReviews} alt = {'Call Reviews'} />
        </div>

    </div>  
    );
  }
}

export default Schedule;