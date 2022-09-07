import React, { Component } from "react";
import NavBar from "./NavBar";
import ContainerHandler from '../Scripts/ContainerHandler.js';
class TakeTheQuiz extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className = 'quizContainer'>

            <div className = 'quizStart' id = 'p1'>
             im quiz start
            </div>
            <div className = 'message1' id = 'p2'>
             im message 1
            </div>
            <div className = 'quizPage1' id = 'p3'>
             im page 1
            </div>
            <div className = 'quizPage2' id = 'p4'>
             im page 2
            </div>
            <div className = 'quizPage3' id = 'p5'>
             im page 3
            </div>
            <div className = 'quizPage4' id = 'p6'>
             im page 4
            </div>
            <div className = 'message2' id = 'p7'>
             im message 2
            </div>
            <div className = 'message3' id = 'p8'>
             im message 3
            </div>
            <div className = 'quizPage5' id = 'p9'>
             im page 5
            </div>
            <div className = 'quizPage6' id = 'p10'>
             im page 6
            </div>
            <div className = 'quizPage7' id = 'p11'>
             im page 7
            </div>
            <div className = 'message4' id = 'p12'>
             im message 4
            </div>
            <div className = 'message5' id = 'p13'>
             im message 5
            </div>
            <div className = 'quizPage8' id = 'p14'>
             im page 8
            </div>
            <div className = 'quizPage9' id = 'p15'>
             im page 9
            </div>
            <div className = 'message6' id = 'p16'>
             im message 6
            </div>
            <div className = 'quizPage10' id = 'p17'>
             im page 10
            </div>
            <button className = 'nextButton' id = "nextButton">Next</button>
            <button className = 'previousButton' id = 'previousButton' >Previous</button>
        </div>
      </>
    );
  }
}

export default TakeTheQuiz;
