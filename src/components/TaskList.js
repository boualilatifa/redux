import React from 'react'
import { useSelector } from 'react-redux'


import Task from './Task';



const TaskList = () => {
  const tasks=useSelector((store)=>store.todo.todolist);
  console.log(tasks)
  return (
    <div>
        {tasks.map((el)=><Task todo={el}/>)}

    </div>
  )
}

export default TaskList;