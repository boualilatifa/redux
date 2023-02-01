import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../taskslice/TaskSlice';


const Header = () => {
  
  const [newtask, setnewtask] = useState({title:""})
  const dispatch=useDispatch()
  
  return (
    <div>
      <input Value={newtask.title} type="text" placeholder='TODO content' onChange={(e)=>setnewtask({...newtask,title:e.target.value})}/>
      <button onClick={()=>{dispatch(addTask(({...newtask,isDone:false,id:Math.floor(Math.random()*10000000)})))
    setnewtask({title:""})
    }}>Add</button>  
    </div>
  )
}

export default Header