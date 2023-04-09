import React, { useContext } from 'react'
import { useState } from 'react';
import { TodoContext } from '../context/TodoProvider';
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import './todo-item.css';

function TodoItem({ todo }) {
    const [toggleUpdate, setToggleUpdate] = useState(false);
    const todoContext = useContext(TodoContext);
    const [name, setName] = useState(todo.title);
    return (
        <div className="todo-item mb-1 mt-10 " style={{marginTop:"30px",boxShadow:"0px 4px 7px gray",padding:"5px"}}>
            {/* <div className="id">#{todo.id[0]}</div> */}
            <div><input type="checkbox" /></div>
            {toggleUpdate ?
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-50 form-control" type="text" /> :
                <div className="title">{todo.title}</div>
            }
            <div className="buttons">
                <div
                    onClick={() => {
                        setToggleUpdate(!toggleUpdate);
                        if (name !== '') {
                            todoContext.updateTodo({
                                id: todo.id,
                                title: name
                            });
                            // setName("");
                        }
                    }}
                    
                    className=" editwala btn btn-white">
                    {toggleUpdate ? "UPDATE" : <BiEditAlt/>}
                </div>
                <div
                    onClick={() => {
                        todoContext.removeTodo(todo.id);
                    }}
                    className="ml-2 btn btn-white"><AiFillDelete/></div>
            </div>
        </div>
    )
}

export default TodoItem