import React, {Component} from 'react';
import money from '../Images/money.png';

class QuizStart  extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className = 'quizStart' >
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
        );
    }
}
 
export default QuizStart ;