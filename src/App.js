import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';
import {Route, BrowserRouter, Link,} from "react-router-dom";

import Ideogram from 'ideogram';
import Header from "./components/Header/Header";
import HumanIdeogram from "./components/HumanIdeogram/HumanIdeogram";


import file from "./data/annotations/100_virtual_snvs";
import ListView from "./components/ListView/ListView";
import styles from "./components/Header/Header.module.css";
import Chromosome from "./components/Chromosome/Chromosome";

const App = () => {

    return (
      <div className="App">

          <BrowserRouter >
              <Header/>
              <div>
                  <Route path="/list"  component={() => <ListView data={file}/>}  />
                  <Route exact path="/" exact component={() => <Chromosome/>}  />
              </div>
          </BrowserRouter>


      </div>
    );

}


export default App;
