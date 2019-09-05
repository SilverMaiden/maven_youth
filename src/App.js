import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import AboutUs from './views/LandingPage/AboutUs.jsx';
import LandingPage from './views/LandingPage/LandingPage.jsx'
import SupportUs from './views/LoginPage/SupportUs.jsx'

class App extends Component {
  render() {
     return (
         <Router>
             <div>
                <Switch>
                    <Route exact path='/' component={AboutUs} />
                    <Route path='/supportus' component={SupportUs} />
                </Switch>
            </div>
            </Router>
    );
  }
}

export default App;
