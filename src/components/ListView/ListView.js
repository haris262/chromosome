import React, {useEffect, useState} from "react";
import axios from 'axios';
import style from "./ListView.module.css"
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import AddModal from "../CURD Modals/AddModal";
import DeleteModal from "../CURD Modals/DeleteModal";
import EditModal from "../CURD Modals/EditModal";
import {withRouter} from "react-router";
import ReactSearchBox from 'react-search-box'
import { MDBInput } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CommentDialog from "./CommentDialog";
import Button from "react-bootstrap/Button";




const ListHeader = (headers) =>{
    return(
        <thead >
        <tr>
            {headers.headers.map((header, index) =>{
                return(
                <th key={index}>
                    {header}
                </th>
                )
            } )}

            <th>Actions</th>
        </tr>
        </thead>
    )
}

const ListBody = ({data, handleEdit, handleDelete, handleComment}) =>{

    return (
        <tbody>
        {data.map((annot, index) =>{
            return(

                <tr key={index}>

                    <td >{annot.name}</td>
                    <td >{annot.chr}</td>
                    <td >{annot.start}</td>
                    <td >{annot.stop}</td>
                    <td className={style.comment} onClick={() => handleComment(annot)}>{annot.comment}</td>

                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        size="sm"
                                        variant="primary"
                                        id="dropdown-basic">

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleEdit(annot)}>Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDelete(annot)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                            </tr>
                        )
                    }
            )
        }


        </tbody>
    )

}



const ListView = (props) => {




    const [data, setData] = useState(props.data);




    const headers = ['Name', 'Chromosome', 'Beginning', 'End', 'Comment'];

    const [selectedRow, setSelectedRow] = useState();

    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = (dialog) => setShowAdd(false);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = (dialog) => setShowDelete(false);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = (dialog) => setShowEdit(false);

    const [showComment, setShowComment] = useState(false);
    const handleCloseComment = (dialog) => setShowComment(false);

    const handleComment = async(annot) => {
        setShowComment(true);
        await setSelectedRow(annot);
    }
    const handleEdit = async(annot) =>{
        setShowEdit(true);
        await setSelectedRow(annot);
    }

    const handleDelete = (annot) =>{
        setShowDelete(true);
        setSelectedRow(annot);
    }




    const handleSearch = async(e) =>{
        let name = e.target.value;

        let response = await axios.get('http://localhost:8080/genes/search', {headers: {name}}).then(response => {setData(response.data);});
    }






    return (
        <div className={style.list}>
            <MDBInput label="Search" onInput={(e) => handleSearch(e)} />
            <Table
                responsive="md"
                hover={true}
                striped={true}
            >
                <ListHeader headers={headers}/>
                <ListBody data={data}
                          handleDelete={(annot) => handleDelete(annot)}
                          handleEdit={(annot) => handleEdit(annot)}
                          setSelectedRow={(row) => setSelectedRow(row)}
                          handleComment={(annot) => handleComment(annot)}
                />

            </Table>
            <DeleteModal show={showDelete} handleClose={() => handleCloseDelete()} selectedRow={selectedRow} reloadData={props.reloadData}/>
            <EditModal show={showEdit} handleClose={() => handleCloseEdit() } selectedRow={selectedRow} reloadData={props.reloadData}/>
            <CommentDialog show={showComment} row={selectedRow} handleClose={() => handleCloseComment()} />
        </div>

    )
};



export default withRouter(ListView);



export function getSafeDeep(object, path, undefinedValue=""){

    let currentObject = object;
    const pathStrings = path.split(".");


    for(let pathString of pathStrings){
        if(currentObject == null || currentObject == undefined) return undefinedValue;
        currentObject = currentObject[pathString];
    }

    return currentObject;
}