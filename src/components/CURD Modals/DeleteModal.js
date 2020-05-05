import React, {useState} from "react";
import style from "./style.module.css"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Select from 'react-select';
import cx from 'classnames';

const DeleteModal = (props) =>{

    return(
        <Modal show={props.show} onHide={props.handleClose} size="md" >
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               Are you sure you want ti delete this item?
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={props.handleClose}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )



}


export default DeleteModal;