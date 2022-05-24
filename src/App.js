import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Appbar from './Components/Appbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Appbar/>

      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route  exact path="/login" element={<Login />}/>
        </Routes>
    </Router>
  );
}

export default App;
