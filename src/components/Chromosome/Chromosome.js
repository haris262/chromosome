import React, {useState} from "react";
import style from "./Chromosome.module.css";
import {withRouter} from "react-router";
import HumanIdeogram from "../HumanIdeogram/HumanIdeogram";
import file from "../../data/annotations/100_virtual_snvs.json";



const Chromosome = (props) => {


    const {data} = props;

    return (
        <div className={style.container}>
            <HumanIdeogram data={file}/>

        </div>

    )
};

export default withRouter(Chromosome);


