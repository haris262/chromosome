import React, {useState} from "react";
import styles from "./Header.module.css";
import AddModal from "../CURD Modals/AddModal";
import {Link, BrowserRouter} from "react-router-dom";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";



const Header = () => {

    const browserHistory = createBrowserHistory();

    console.log(browserHistory)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
      <div className={styles.header}>
          <div className={styles.item}>
              <BrowserRouter>
                  <Link to={"/list"} className={styles.itemAnchor}>
                      List View
                  </Link>
              </BrowserRouter>

          </div>
            <div className={styles.divider}/>

          <div className={styles.item} onClick={handleShow}>
              <a className={styles.itemAnchor}>
                  Add
              </a>
          </div>




          <AddModal show={show} handleClose={() => handleClose()}/>

      </div>
    );
}


export default Header;