import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';
import {Route, BrowserRouter,  } from "react-router-dom";

import Ideogram from 'ideogram';
import Header from "./components/Header/Header";
import HumanIdeogram from "./components/HumanIdeogram/HumanIdeogram";


import file from "./data/annotations/100_virtual_snvs";
import ListView from "./components/ListView/ListView";

const App = () => {

    return (
      <div className="App">
        <Header/>
          <BrowserRouter >
              <div>
                  <Route path="/list" exact component={() => <ListView data={file}/>}  />
                  <Route path="/chromosome" exact component={() => <HumanIdeogram data={file}/>}  />
              </div>
          </BrowserRouter>


      </div>
    );

}


export default App;
