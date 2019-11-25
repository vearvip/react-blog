import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.less';

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
// import Section from './components/Section/Section'
// import Article from './components/Article/Article'
import Home from './pages/Home/Home'
import List from './pages/List/List'
import Detail from './pages/Detail/Detail'
import F0F from './pages/404/404'
import About from './pages/About/About'
import Friend from './pages/Friend/Friend'
import Say from './pages/Say/Say'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
        <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/list/:page" exact component={List} />
          <Route path="/detail" exact component={Detail} />
          <Route path="/say" exact component={Say} />
          <Route path="/about" exact component={About} />
          <Route path="/friend" exact component={Friend} />
          <Route path="/404" component={F0F} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;