import React, { Component } from 'react';

class QuizPage1 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className = 'quizPage1'>
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
         );
    }
}
 
export default QuizPage1;