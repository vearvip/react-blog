import React, { Component } from 'react';

import './App.less';

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Section from './components/Section/Section'
import Article from './components/Article/Article'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav defaultSelectedKeys={['react']} />
        <Section />
        <Article></Article>
        <Footer />
      </div>
    );
  }
}

export default App;