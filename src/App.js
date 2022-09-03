import "./CSS/App.css";
import Main from "./componenets/Main";
import OurStory from "./componenets/OurStory";
import HowItWorks from "./componenets/HowItWorks";
import NoFilter from "./componenets/NoFilter.jsx";
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path = '' element = {<Main />}/>
      <Route path = '/OurStory' element = {<OurStory />}/>
      <Route path = '/HowItWorks' element = {<HowItWorks />}/>
      <Route path = '/#NoFilter' element = {<NoFilter />}/>
  </Routes>
  </BrowserRouter> 
    
  );
}

export default App;
