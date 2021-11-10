import {Router, Route } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import React from 'react';
import Homepage from './component/Homepage';

const App = () => {
    return (
      <Router>
          <Home/>
          <Route path="/" component ={Homepage}/>
      </Router>
      
    )
}

export default App;
