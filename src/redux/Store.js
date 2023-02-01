import { configureStore } from '@reduxjs/toolkit';
import  todoslice from '../taskslice/TaskSlice';



export const store = configureStore({
    reducer: {todo:todoslice},
  })


