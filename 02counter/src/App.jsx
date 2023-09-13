import { useState } from 'react';
import './App.css';

function App() {
  //let counter = 15;
  let [counter, setCounter] = useState(0);


  const addValue = () =>{
    setCounter(counter + 1);
    if(counter >= 20){
      setCounter(20);
      
    }
  }
  const removeValue = () =>{
    setCounter(counter - 1);
    if(counter <=0){
      setCounter(0);
    }
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue} >Remove value</button>
      
    </>
  );
}
 
export default App;
