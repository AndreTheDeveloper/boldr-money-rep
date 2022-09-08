import React, { Component } from "react";
import NavBar from "./NavBar";
import QuizStart from './QuizStart';
import QuizPage1 from './QuizPage1';
import QuizPage2 from "./QuizPage2";
import { ReactDOM } from "react";
import { render } from "@testing-library/react";

var currentPage = 0;
var nextPage = 0;
var previousPage = -1;
var getPage;
var newPage;


const next = () => {
  if(nextPage < 2){
    nextPage = ++nextPage;
    getPage = 'p' + String(currentPage);
    newPage = 'p' + String(nextPage);
    document.getElementById(getPage).style.display = 'none';
    document.getElementById(newPage).style.display = 'block';
    currentPage = ++currentPage;
    previousPage = ++previousPage;
  }

  else{

  }
}

const previous = () => {
  if(previousPage > -1){
    nextPage = --nextPage;
    getPage = 'p' + String(currentPage);
    newPage = 'p' + String(previousPage);
    document.getElementById(getPage).style.display = 'none';
    document.getElementById(newPage).style.display = 'block';
    currentPage = --currentPage;
    previousPage = --previousPage;
  }
}

class TakeTheQuiz extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className = 'quizContainer'>
          <div className = 'p0' id ='p0' style = {{display: 'block'}}>
            <QuizStart />
          </div>
          <div className = 'p1' id ='p1' style = {{display: 'none'}}>
            <QuizPage1 />
          </div>
         <div className = 'p2' id = 'p2' style = {{display: 'none'}}>
            <QuizPage2 />
          </div>
            <div className="quizButtons">
              <button onClick = {next}>Next</button>
              <button onClick = {previous}>Previous</button>
            </div>
        </div>
      </>
    );
  }
}

export default TakeTheQuiz;
