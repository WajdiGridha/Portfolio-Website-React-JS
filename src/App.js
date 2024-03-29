import React, { Component } from 'react';
import './App.css';
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Services from './components/Services';
import About from './components/About';
import Prices from './components/Prices';
import Contact from './components/Contact';
Contact
class App extends Component {
  render() {
    return (
      <div className="App">
      <Banner />
      <Nav />
      <Services />
      <About />
      <Prices />
      <Contact />
      </div>
    );
  }
}

export default App;
