import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoForms from "./components/TodoForms";
import TodoItem from "./components/TodoItem";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(), ...todo},...prev])

  }
  const updateTodo = (id,todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
 
  }

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, complete: !prevTodo.complete} : prevTodo))
  }

  //Local storage mainly used for storing data in the browser and get item from local storage using getItem method and setItem method is used to set the data in local storage.
  //this useEffect is used to get the data from local storage.
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  //this useEffect is used to set the data in local storage.
  //here todos is the key and JSON.stringify(todos) is the value. We have to send value in string format.
   useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
   },[todos])



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}<TodoForms/></div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
