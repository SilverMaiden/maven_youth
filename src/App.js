import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import AboutUs from './views/LandingPage//AboutUs.jsx';
import LandingPage from './views/LandingPage/LandingPage.jsx'

class App extends Component {
  render() {
     return (
            <AboutUs />
    );
  }
}

export default App;
