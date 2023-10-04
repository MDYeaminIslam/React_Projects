import React, {useState} from 'react';
import {useTodo} from '../contexts/TodoContext';

function TodoForms() {
  const [todo, setTodo] = useState('');

  const {addTodo} = useTodo();

  //this add function is used to add the todo in the todo list.
  const add = (e) =>{
    e.preventDefault()

    if(!todo) return //this is used to check if the todo is empty or not. If the todo is empty then it will return nothing.

    addTodo({ todo, complete: false }) //here we are passing the todo and complete as false because we are not going to complete the todo at the time of adding the todo.
    setTodo('') //this is used to clear the input field after adding the todo.
  }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo} //here we are setting the value of the input field to todo.
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForms;
