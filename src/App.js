import "./CSS/App.css";
import Main from "./componenets/Main";
import OurStory from "./componenets/OurStory";
import HowItWorks from "./componenets/HowItWorks";
import NoFilter from "./componenets/NoFilter.jsx";
import JoinBolder from "./componenets/JoinBolder.jsx";
import BookACall from "./componenets/BookACall.jsx";
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path = '/' element = {<Main />}/>
      <Route exact path = '/OurStory' element = {<OurStory />}/>
      <Route exact path = '/HowItWorks' element = {<HowItWorks />}/>
      <Route exact path = '/NoFilter' element = {<NoFilter />}/>
      <Route exact path = '/JoinBolder' element = {<JoinBolder />}/>
      <Route exact path = '/BookACall' element = {<BookACall />}/>
  </Routes>
  </BrowserRouter> 
    
  );
}

export default App;
