//creating a store
//store update the value which reducers register here.
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
//here store will take a object
export const store = configureStore({
  reducer: todoReducer
});