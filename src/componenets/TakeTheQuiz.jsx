import React, { Component } from "react";
import NavBar from "./NavBar";
import money from '../Images/money.png';


class TakeTheQuiz extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className = 'quizContainer'>

            <div className = 'quizStart' id = 'p1'>
              <img src = {money} />
             <h2>
              Unlock Your Financial Potential
             </h2>
             <p>
              Find out how much better off you could be this time next year.  
            </p>
            <h3>
              First things first, what's your name?
            </h3>
            <form>
              <input className = 'nameForm' type = 'text' placeholder = 'ex.Lily' name = 'name' />
            </form>
            </div>
            <div className = 'quizPage1' id = 'p3'>
              <h2>
                What do you really want
              </h2>
              <p>
                Start with your top 3
              </p>
            <div className = 'checkGrid'>
             <form className = 'check'>
              <input className = 'checkbox' type = 'checkbox' name = 'checkl' value = 'Ditch debt, forever' />
              <label for="check1">Ditch debt, forever</label>
             </form>
             <form className = 'check'>
              <input className = 'checkbox' type = 'checkbox' name = 'check2' value = 'WFH for life' />
              <label for="check1">WFH for life</label>
             </form>
             <form className = 'check'>
              <input className = 'checkbox' type = 'checkbox' name = 'check3' value = 'Get married' />
              <label for="check1">Get married</label>
             </form>
             <form className = 'check'>
              <input className = 'checkbox' type = 'checkbox' name = 'check4' value = 'Buy my first house (or second)' />
              <label for="check1">Buy my first house (or second)</label>
             </form>
             <form className = 'check'>
              <input className = 'checkbox' type = 'checkbox' name = 'check5' value = 'Invest (like I understand it)' />
              <label for="check1">Invest (like I understand it)</label>
             </form>
             <form className = 'check'>
              <input className = 'checkbox' type = 'checkbox' name = 'check6' value = 'Retire early, and travel the world' />
              <label for="check1">Retire early, and travel the world</label>
             </form >
             <form className = 'check'>
              <input className = 'checkbox' type = 'checkbox' name = 'check7' value = 'Get that raise' />
              <label for="check1">Get that raise</label>
             </form>
             <form className = 'check'>
              <input className = 'checkbox' type = 'checkbox' name = 'check8' value = 'Quit my job' />
              <label for="check1">Quit my job</label>
             </form>
             <form className = 'check'>
              <input className = 'checkbox' type = 'checkbox' name = 'check9' value = 'Start a family' />
              <label for="check1">Start a family</label>
             </form>
             <form className = 'check'>
              <input className = 'checkbox' type = 'checkbox' name = 'check10' value = "Move on from a relationship that’s holding me back" />
              <label for="check1"> Move on from a relationship that’s holding me back</label>
             </form>
             <form className = 'check'>
              <input className = 'checkbox' type = 'checkbox' name = 'checkl1' value = 'Support my aging parents' />
              <label for="check1">Support my aging parents</label>
             </form>
             </div>
            </div>
            <div className = 'quizPage2' id = 'p4'>
                <h2>How does money make you feel</h2>
                <div className = 'rows'>
                <div className = 'emoji'>
                  <input className = 'angry' type = 'checkbox' id = 'angry' value = 'angry' />
                  <label className = 'angryEmoji' htmlFor="angry"></label>
                </div>
                <div className = 'emoji'>
                  <input className = 'uneasy' type = 'checkbox' id = 'uneasy' value = 'uneasy' />
                  <label className = 'uneasyEmoji' htmlFor="uneasy"></label>
                </div>
                <div className = 'emoji'>
                  <input className = 'indifferent' type = 'checkbox' id = 'indifferent' value = 'indifferent' />
                  <label className = 'indifferentEmoji' htmlFor="indifferent"></label>
                </div>
                <div className = 'emoji'>
                  <input className = 'happy' type = 'checkbox' id = 'happy' value = 'happy' />
                  <label className = 'happyEmoji' htmlFor="happy"></label>
                </div>
                <div className = 'emoji'>
                  <input className = 'cool' type = 'checkbox' id = 'cool' value = 'cool' />
                  <label className = 'coolEmoji' htmlFor="cool"></label>
                </div>
              </div>
              <p>Which of these emotions best describes your current feeling about money</p>
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
