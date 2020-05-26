import React, {useState} from "react";
import axios from "axios";
import style from "./Chromosome.module.css";
import {withRouter} from "react-router";
import HumanIdeogram from "../HumanIdeogram/HumanIdeogram";



const Chromosome = (props) => {



    const [chromosomeData, setChromosomeData] = useState(props.data);


    return (
        <div className={style.container}>
            <HumanIdeogram data={chromosomeData}/>

        </div>

    )
};

export default withRouter(Chromosome);


