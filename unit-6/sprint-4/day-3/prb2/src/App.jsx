import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";

function App() {
  const [toggle,setToggle] = useState(false)
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={(event)=>{
        if(!toggle){
          event.target.innerText = "Show Fictional Books";
          setToggle(true)
        }
        else{
          event.target.innerText = "Show Non-Fiction Books";
          setToggle(false)
        }
      }}>Show Non-Fiction Books</button>

      <div data-testid="conditional-container">
        {toggle?<NonFiction/>:<Fiction/>}
      </div>
    </div>
  );
}

export default App;
