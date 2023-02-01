import React from 'react'
import { useDispatch } from 'react-redux';
import { deletetask } from '../taskslice/TaskSlice';

const Task = ({todo}) => {
 const dispatch=useDispatch()
 
 
  return (
    <div>
     <h1>{todo.task}</h1>
     <button>update</button>
     <button onClick={()=>dispatch(deletetask(todo))}>x</button>
    </div>
  )
}

export default Task;