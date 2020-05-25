import React, {useEffect, useState} from "react";
import axios from 'axios';
import style from "./ListView.module.css"
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import AddModal from "../CURD Modals/AddModal";
import DeleteModal from "../CURD Modals/DeleteModal";
import EditModal from "../CURD Modals/EditModal";
import {withRouter} from "react-router";




const ListHeader = (headers) =>{
    console.log(headers)
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

const ListBody = ({data, handleEdit, handleDelete}) =>{

    console.log(data)

    return (
        <tbody>
        {data.map((annot, index) =>{
            return(

                <tr key={index}>

                    <td >{annot.name}</td>
                    <td >{annot.chr}</td>
                    <td >{annot.start}</td>
                    <td >{annot.stop}</td>

                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        size="sm"
                                        variant="secondary"
                                        id="dropdown-basic">

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={() => handleEdit(annot)}>Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" onClick={() => handleDelete(annot)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                            </tr>
                        )
                    }
            )
        })}


        </tbody>
    )

}


const ListView = (props) => {
    const loadData  =  async () =>{
        let response = await axios.get('http://localhost:8080/genes').then(async (response) => {await setData(response.data); console.log(response)});
    }

    const headers = ['Name', 'Chromosome', 'Beginning', 'End'];

    const [selectedRow, setSelectedRow] = useState();

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = (dialog) => setShowDelete(false);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = (dialog) => setShowEdit(false);

    const handleEdit = async(annot) =>{
        setShowEdit(true);
        await setSelectedRow(annot);
    }

    const handleDelete = (annot) =>{
        setShowEdit(true);
        setSelectedRow(annot);
    }

    useEffect(() => {
        loadData();
    })


    const [data, setData] = useState([]);


    return (
        <div className={style.list}>
            <Table
                responsive="md"
                hover={true}
                striped={true}
            >
                <ListHeader headers={headers}/>
                <ListBody data={data} handleDelete={(annot) => handleDelete(annot)} handleEdit={(annot) => handleEdit(annot)} setSelectedRow={(row) => setSelectedRow(row)}/>

            </Table>
            <DeleteModal show={showDelete} handleClose={() => handleCloseDelete()} selectedRow={selectedRow}/>
            <EditModal show={showEdit} handleClose={() => handleCloseEdit() } selectedRow={selectedRow}/>
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