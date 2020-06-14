import React, {useState} from "react";
import style from "./style.module.css"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Select from 'react-select';
import cx from 'classnames';
import axios from "axios";
import {getSafeDeep} from "../ListView/ListView";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const DeleteModal = (props) => {

    const deleteAnnot = () => {

        axios.delete('http://localhost:8080/genes/delete', {headers: {id: getSafeDeep(props.selectedRow, 'id')}}).then(() => props.reloadData());

    }


    return(
        <Modal show={props.show} onHide={props.handleClose} size="md" >
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               Are you sure you want ti delete this item?
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => { deleteAnnot();props.handleClose()}}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )



}


export default DeleteModal;