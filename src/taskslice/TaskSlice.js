import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todolist: [{id:"1",task:"task1"},{id:"2",task:"task2"},{id:"3",task:"task3"}],
}

export const todoslice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask:(state,action)=>{state=state.todolist.push(action.payload)},
   
    deletetask:(state,action)=>{state.todolist=state.todolist.filter((el)=>el.id!==action.payload.id)}
   // incrementByAmount: (state, action) => {
     // state.value += action.payload
    //},
  },
})

// Action creators are generated for each case reducer function
export const {addTask,deletetask} = todoslice.actions;
export default todoslice.reducer;

