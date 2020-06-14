import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {getSafeDeep} from "./ListView";

const CommentDialog = (props) => {

    return(
        <Modal show={props.show} onHide={props.handleClose} size="md" >
            <Modal.Header closeButton>
                <Modal.Title>Comment</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {getSafeDeep(props.row,'comment')}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )



}


export default CommentDialog;