//here we will create reducer and this called slice
//nanoid is used to generate unique id
import { createSlice, nanoid } from "@reduxjs/toolkit";


//this is the initial state of the todo and it is a object
const initialState ={
  todos: [{id:1,text:"Hello"}]
}

//here we will create reducer and this called slice and this is simple a method.
//reducer take two things and they are property and function
//here we will reducers and in reducers we take state and action. addTodo take state and action and same for removeTodo
//state is the current state of the application
//action is the action that we are going to perform
//payload is also a object
//here we export the slice
export const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers: {
    addTodo:(state, action) => {
      const todo ={
        id:nanoid(),
        text: action.payload
      }
      state.todos.push(todo) //here we are pushing the todo in the todos array like updating the state
    },
    removeTodo:(state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  }

})

//here we will export the actions
export const {addTodo, removeTodo} = todoSlice.actions

//here we will export the reducer and we have to export all the individual reducers which we have created. if we create more than we have to export all of them individually
export default todoSlice.reducer