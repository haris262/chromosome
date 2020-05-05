import React, { Component } from 'react';
import file from "../../data/annotations/100_virtual_snvs"
import Ideogram from 'ideogram';
import style from "./HumanIdeogram.module.css"

export default class HumanIdeogram extends Component {

    createIdeogram() {
        const config = Object.assign({
            chrWidth: 17,
            chrMargin: 10,
            chrHeight: 600,
            organism: 'human',
            annotations: file,
            dataDir: 'https://unpkg.com/ideogram@1.16.0/dist/data/bands/native/',
            container: '#ideo-container',
            annotationsLayout: 'overlay'
        }, this.props);
        new Ideogram(config);
    }

    componentDidUpdate() {
        return this.createIdeogram();
    }

    componentDidMount() {
        return this.createIdeogram();
    }

    render() {
        return (
            <div id="ideo-container" className={style.ideogram}></div>
        );
    }
}