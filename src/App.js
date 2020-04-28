import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Ideogram from 'ideogram';
import Header from "./components/Header/Header";
import HumanIdeogram from "./components/HumanIdeogram/HumanIdeogram";

class App extends Component {
  anno = [{
    name: 'BRCA1',
    chr: '17',
    start: 43044294,
    stop: 43125482
  }];

  render() {
    return (
      <div className="App">
        <Header/>
        <HumanIdeogram annotations={this.anno}/>
      </div>
    );
  }
}

class AppIdeogram extends Component {

  componentDidMount() {
    return new Ideogram({
      organism: 'human',
      annotations: [{
        name: 'BRCA1',
        chr: '17',
        start: 43044294,
        stop: 43125482
      }],
      container: '#ideo-container'
    });
  }

  render() {
    return (
      <div id="ideo-container"></div>
    );
  }
}

export default App;
