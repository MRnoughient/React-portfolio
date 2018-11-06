import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from './components/Nav';
import Footer from './components/Footer';
import './fontawesome/css/all.css';
import './style/Fonts.css';
import './style/Style.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <Nav />
      <div className="content">
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      </div>
      <Footer />
      </div>
      </HashRouter>
    );
  }
}

export default App;
