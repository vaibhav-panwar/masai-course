import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter :- {counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>+</button>
      <button onClick={()=>{
        setCounter(counter-1)
      }}>-</button>
    </div>
  );
}

export default App;
