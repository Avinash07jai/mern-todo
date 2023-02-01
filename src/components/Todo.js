import React from 'react';
import '../../src/App.css';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({text, updateMode, deleteMode}) => {
  return (
    <div className='todo'>
        <div className='text'>{text}</div>
        <div className='icons'>
              <FaEdit className='icon' onClick={updateMode}/>
              <AiFillDelete className='icon' onClick={deleteMode} />
        </div>
      
    </div>
  )
}

export default Todo;
