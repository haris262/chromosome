import React, {Component, useEffect, useState} from 'react';
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
import axios from "axios";

const App = () => {
    const loadData  =  async () =>{
        let response = await axios.get('http://localhost:8080/genes').then(response => {setData(response.data);});
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    return (
      <div className="App">

          <BrowserRouter >
              <Header reloadData={() => loadData()}/>
              <div>
                  <Route path="/list"  component={() => <ListView data={data} reloadData={() => loadData()}/>}  />
                  <Route exact path="/" exact component={() => <Chromosome data={data}/>}  />
              </div>
          </BrowserRouter>


      </div>
    );

}


export default App;
