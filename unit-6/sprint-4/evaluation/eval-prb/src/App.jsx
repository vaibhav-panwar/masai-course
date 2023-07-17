import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Rate from "./Pages/Rate";
function App() {
  return <div id="app">
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rate/:movie_id" element={<Rate/>} />
       </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
