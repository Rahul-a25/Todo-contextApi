import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoProvider'
import { MdAddCircleOutline } from "react-icons/md";
import { v1 } from 'uuid';
import "./todo.css"
function TodoInput() {
    const [name, setName] = useState("")
    // inputwala col form-control
    var todoContext = useContext(TodoContext);
    return (
        <div className="row">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Add TODO..." className=" " type="text" />
            <button
                onClick={() => {
                    if (name !== "") {
                        todoContext.addTodo({
                            id: v1(),
                            title: name
                        })
                        setName("");
                    }
                }}
                className="addwala btn btn-white" style={{}}> <span style={{fontSize:"30px"}}>
                    <  MdAddCircleOutline/></span></button>
        </div>
    )
}

export default TodoInput