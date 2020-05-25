import React, { Component } from 'react';
import Ideogram from 'ideogram';
import style from "./HumanIdeogram.module.css"

export default class HumanIdeogram extends Component {

    createIdeogram() {
        const config = Object.assign({
            chrWidth: 17,
            chrMargin: 10,
            chrHeight: 600,
            organism: 'human',
            annotations: this.props.data,
            dataDir: 'https://unpkg.com/ideogram@1.16.0/dist/data/bands/native/',
            container: '#ideo-container',
            annotationsLayout: 'overlay'
        }, this.props);
        new Ideogram(config);

        console.log(this.props.data)
    }

    componentDidUpdate() {
        return this.createIdeogram();
    }

    componentDidMount() {
        return this.createIdeogram();
    }

    render() {
        return (
            <div className={style.ideogram}>
                <div id="ideo-container" className={style.ideo} ></div>
            </div>

        );
    }
}