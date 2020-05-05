import React, {useState} from "react";
import style from "./ListView.module.css"
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import AddModal from "../CURD Modals/AddModal";
import DeleteModal from "../CURD Modals/DeleteModal";




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

const ListBody = ({data, handleShow}) =>{
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
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" onClick={() => handleShow()}>Delete</Dropdown.Item>
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {data} = props;

    return (
        <div className={style.list}>
            <Table
                responsive="md"
                hover={true}
                striped={true}
            >
                <ListHeader headers={getSafeDeep(data, "keys")}/>

                <ListBody data={data.annots} handleShow={() => handleShow()}/>

            </Table>
            <DeleteModal show={show} handleClose={() => handleClose()}/>
        </div>

    )
};

export default ListView;



export function getSafeDeep(object, path, undefinedValue=""){

    let currentObject = object;
    const pathStrings = path.split(".");


    for(let pathString of pathStrings){
        if(currentObject == null || currentObject == undefined) return undefinedValue;
        currentObject = currentObject[pathString];
    }

    return currentObject;
}