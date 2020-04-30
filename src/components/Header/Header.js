import React, {useState} from "react";
import styles from "./Header.module.css";
import AddModal from "../CURD Modals/AddModal";





const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
      <div className={styles.header}>
          <div className={styles.item} onClick={handleShow}>
              <a className={styles.itemAnchor}>
                  Add
              </a>
          </div>
          <div className={styles.item}>
              <a className={styles.itemAnchor}>
                  Menu
              </a>
          </div>
          <div className={styles.item}>
              <a className={styles.itemAnchor}>
                  Menu
              </a>
          </div>

          <AddModal show={show} handleClose={() => handleClose()}/>

      </div>
    );
}


export default Header;