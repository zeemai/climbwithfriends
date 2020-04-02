import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import 'antd/dist/antd.css';
import MapContainer from './containers/MapContainer';

import './App.css';
import { logDOM } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="app-leftside"/>

          <div className="app-rightside">
            <div className="pageSwitcher">
                <NavLink to="/sign-in" activeClassName="pageSwitcher-item-Active" className="pageSwitcher-item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="pageSwitcher-item-Active" className="pageSwitcher-item">Sign Up</NavLink>
              </div>

              <div className="formTitle">
                  <NavLink to="/sign-in" activeClassName="formTitle-Link--Active" className="formTitle-Link">Sign In</NavLink> 
                  or 
                  <NavLink exact to="/" activeClassName="formTitle-Link--Active" className="formTitle-Link">Sign Up</NavLink>

                  <NavLink exact to="/center-finder" className="formTitle-Link centerFinder"> Climbing Center Finder </NavLink>
              </div>

              <Route exact path="/" component={SignUpForm} />
              <Route path="/sign-in" component={SignInForm} />
              <Route path="/center-finder" component={MapContainer} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;