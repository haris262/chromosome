import React, {useState} from "react";
import axios from "axios";
import style from "./Chromosome.module.css";
import {withRouter} from "react-router";
import HumanIdeogram from "../HumanIdeogram/HumanIdeogram";



const Chromosome = (props) => {

    const loadData  =  async () =>{
        let response = await axios.get('http://localhost:8080/genes').then(response => {setChromosomeData(response.data)});
    }

    const [chromosomeData, setChromosomeData] = useState(loadData);

    const {data} = props;

    return (
        <div className={style.container}>
            <HumanIdeogram data={chromosomeData}/>

        </div>

    )
};

export default withRouter(Chromosome);


