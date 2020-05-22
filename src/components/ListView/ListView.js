import React, {useState} from "react";
import style from "./ListView.module.css"
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import AddModal from "../CURD Modals/AddModal";
import DeleteModal from "../CURD Modals/DeleteModal";
import EditModal from "../CURD Modals/EditModal";
import {withRouter} from "react-router";




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

const ListBody = ({data, handleShowDelete, handleShowEdit}) =>{
    return (
        <tbody>
        {data.map((chr) =>{
            return(
                    chr.annots.map((annot, index) =>{
                        return(
                            <tr key={index}>
                                {annot.map((item, index) =>{
                                return(
                                    <td key={`${index}-${item}`}>{item}</td>

                                )
                            }
                            )}
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        size="sm"
                                        variant="secondary"
                                        id="dropdown-basic">

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={() => handleShowEdit()}>Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" onClick={() => handleShowDelete()}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                            </tr>
                        )
                    }
                    )


            )
        })}


        </tbody>
    )

}


const ListView = (props) => {

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = (dialog) => setShowDelete(false);
    const handleShowDelete = (dialog) => setShowDelete(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = (dialog) => setShowEdit(false);
    const handleShowEdit = (dialog) => setShowEdit(true);



    const {data} = props;

    return (
        <div className={style.list}>
            <Table
                responsive="md"
                hover={true}
                striped={true}
            >
                <ListHeader headers={getSafeDeep(data, "keys")}/>

                <ListBody data={data.annots} handleShowDelete={() => handleShowDelete()} handleShowEdit={() => handleShowEdit()}/>

            </Table>
            <DeleteModal show={showDelete} handleClose={() => handleCloseDelete()}/>
            <EditModal show={showEdit} handleClose={() => handleCloseEdit()}/>
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