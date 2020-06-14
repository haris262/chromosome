import React, {useState} from "react";
import axios from 'axios';
import style from "./style.module.css"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Select from 'react-select';
import cx from 'classnames';
import { SketchPicker } from 'react-color';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const AddModal = (props) =>{


    const addAnnot = () =>{
        const data = {name, chr:selectedChr.label, start, stop, color:selectedColor.background, comment};
        axios.post('http://localhost:8080/genes/add', data).then(() => props.reloadData());

    }

    const [selectedChr, setSelectedChr] = useState("");
    const [selectedColor, setSelectedColor] = useState({ background: '#b81414' });
    const [name, setName] = useState("");
    const [start, setStart] = useState("");
    const [stop, setStop] = useState("");
    const [comment, setComment] = useState("");

    const handleChangeComplete = (color) => {
        setSelectedColor({ background: color.hex });
    };


    return(
        <Modal show={props.show} onHide={props.handleClose} size="md" >
            <Modal.Header closeButton>
                <Modal.Title>Add Locus</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label className={style.row}>
                        <div className={style.label}>Chromosome:</div>
                        <Select
                            className={style.select}
                            value={selectedChr}
                            onChange={value => setSelectedChr(value)}
                            options={chromosomeOptions}
                        />
                    </label>
                    <label className={style.row}>
                        <div className={style.label}>Name:</div>
                        <input className={style.input} type="text" name="name" onChange={(e) => {setName(e.target.value)}} />
                    </label>
                    <label className={style.row}>
                        <div className={style.label}>Beginning:</div>
                        <input className={style.input} type="text" name="name" onChange={(e) => {setStart(e.target.value)}} />
                    </label>
                    <label className={style.row}>
                        <div className={style.label}>End:</div>
                        <input className={style.input} type="text" name="name" onChange={(e) => {setStop(e.target.value);}}/>
                    </label>
                    <label className={style.row}>
                        <div className={style.label}>Color:</div>
                        <SketchPicker
                            color={ selectedColor.background }
                            onChangeComplete={(color) => handleChangeComplete(color) }/>
                    </label>
                    <label className={style.row}>
                        <div className={style.label}>Link:</div>
                        <input className={style.input} type="text" name="name" />
                    </label>
                    <label className={style.row}>
                        <div className={style.label}>Comment:</div>
                        <textarea className={style.input}  name="name" onChange={(e) => {setComment(e.target.value)}}/>
                    </label>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="default" onClick={() =>{addAnnot(); props.handleClose()}}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )



}
const chromosomeOptions = [
    {label: "1", value: 1},
    {label: "2", value: 2},
    {label: "3", value: 3},
    {label: "4", value: 4},
    {label: "5", value: 5},
    {label: "6", value: 6},
    {label: "7", value: 7},
    {label: "8", value: 8},
    {label: "9", value: 9},
    {label: "10", value: 10},
    {label: "11", value: 11},
    {label: "12", value: 12},
    {label: "13", value: 13},
    {label: "14", value: 14},
    {label: "15", value: 15},
    {label: "16", value: 16},
    {label: "17", value: 17},
    {label: "18", value: 18},
    {label: "19", value: 19},
    {label: "20", value: 20},
    {label: "21", value: 21},
    {label: "22", value: 22},
    {label: "X", value: 23},
    {label: "Y", value: 24},

]

const colorOptions = [
    {label: "gray", value: "gray"},
    {label: "red", value: "red"},
    {label: "blue", value: "blue"},
    {label: "green", value: "green"},
    {label: "purple", value: "purple"},
]

export default AddModal;