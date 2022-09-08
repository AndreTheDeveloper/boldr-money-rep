import React, { Component } from 'react';

class QuizPage2 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className = 'quizPage2' >
                <h2>How does money make you feel</h2>
                <div className = 'rows'>
                <div className = 'emoji'>
                  <input className = 'angry' type = 'radio' id = 'angry' name = 'selectOne' />
                  <label className = 'angryEmoji' htmlFor="angry"></label>
                </div>
                <div className = 'emoji'>
                  <input className = 'uneasy' type = 'radio' id = 'uneasy' name = 'selectOne' />
                  <label className = 'uneasyEmoji' htmlFor="uneasy"></label>
                </div>
                <div className = 'emoji'>
                  <input className = 'indifferent' type = 'radio' id = 'indifferent' name = 'selectOne' />
                  <label className = 'indifferentEmoji' htmlFor="indifferent"></label>
                </div>
                <div className = 'emoji'>
                  <input className = 'happy' type = 'radio' id = 'happy' name = 'selectOne' />
                  <label className = 'happyEmoji' htmlFor="happy"></label>
                </div>
                <div className = 'emoji'>
                  <input className = 'cool' type = 'radio' id = 'cool' name = 'selectOne' />
                  <label className = 'coolEmoji' htmlFor="cool"></label>
                </div>
              </div>
              <p>Which of these emotions best describes your current feeling about money</p>
            </div>
        );
    }
}
 
export default QuizPage2;