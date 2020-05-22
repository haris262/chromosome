import React, {useState} from "react";
import styles from "./Header.module.css";
import AddModal from "../CURD Modals/AddModal";
import {Link, BrowserRouter, NavLink} from "react-router-dom";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import cx from 'classnames';





const Header = () => {

    const browserHistory = createBrowserHistory();

    console.log(browserHistory)

    const getLocation = () =>{
        console.log(browserHistory.location)
        if(browserHistory.location.pathname === "/list")
            return true
        else
            return false
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isList, setIsList] = useState(() => getLocation());




    return(
      <div className={styles.header}>
          <div className={styles.item}>

                  <NavLink to={"/list"} className={cx('link',{'inactive' : isList })} onClick={() => setIsList(true)}>
                      List View
                  </NavLink>
              <NavLink to={"/"} className={cx('link',{'inactive' : !isList })} onClick={() => setIsList(false)}>
                  Chromosome
              </NavLink>


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