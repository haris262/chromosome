import React, { Component } from 'react';
import file from "../../data/annotations/100_virtual_snvs"
import Ideogram from 'ideogram';

export default class HumanIdeogram extends Component {

    createIdeogram() {
        const config = Object.assign({

            organism: 'human',
            annotations: file,
            dataDir: 'https://unpkg.com/ideogram@1.16.0/dist/data/bands/native/',
            container: '#ideo-container'
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
            <div id="ideo-container"></div>
        );
    }
}