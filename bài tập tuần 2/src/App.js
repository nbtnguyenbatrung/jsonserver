import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './component/home';
import React from 'react';
import Homepage from './component/Homepage';
import CSS from './component/CSS';
import HTML from './component/HTML';
import JavaScript from './component/JavaScript';
import Nodejs from './component/Nodejs';
import Reactjs from './component/Reactjs';
import Error from './component/Error';
const App = () => {   
  return(   

        <Router>
          <Home/>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/HTML" element={<HTML/>}/>
            <Route path="/JavaScript" element={<JavaScript/>}/>
            <Route path="/Nodejs" element={<Nodejs/>}/>
            <Route path="/Reactjs" element={<Reactjs/>}/>
            <Route path="/CSS" element={<CSS/>}/>
            <Route path="/:somestring" element={<Error/>}/>
          </Routes>
        </Router>
  )
}

export default App;
