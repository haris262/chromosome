import React, {useState} from "react";
import "./Header.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";





const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <>
      <div className="container">
          <div className="item" onClick={handleShow}>
              <a className="item-anchor">
                  Add
              </a>
          </div>
          <div className="item">
              <a className="item-anchor">
                  Menu
              </a>
          </div>
          <div className="item">
              <a className="item-anchor">
                  Menu
              </a>
          </div>
          <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                      Save Changes
                  </Button>
              </Modal.Footer>
          </Modal>

      </div>
            </>
    );
}


export default Header;