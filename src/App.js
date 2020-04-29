import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Ideogram from 'ideogram';
import Header from "./components/Header/Header";
import HumanIdeogram from "./components/HumanIdeogram/HumanIdeogram";


import file from "./data/annotations/1000_virtual_snvs";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <HumanIdeogram annotations={file} />
      </div>
    );
  }
}


export default App;
