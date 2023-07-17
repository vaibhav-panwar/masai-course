import "./App.css";
import UserDetails from "./components/UserDetails";
import { useState } from "react";
import jsonData from "./db.json";
// import data from db.json

function App() {
  const [data, setData] = useState(jsonData);

  return (
    <div className="App" data-testid='app'>
      <button data-testid='sort-asc-btn' onClick={() => {
          setData(data.sort((a, b) => {

            if (a.first_name < b.first_name) {
              return -1;
            }
            if (a.first_name > b.first_name) {
              return 1;
            }
            return 0;
          }))
      }}>Sort by Asc</button>
      <button data-testid='sort-desc-btn' onClick={() => {
          setData(data.sort((a, b) => {

            if (a.first_name > b.first_name) {
              return -1;
            }
            if (a.first_name < b.first_name) {
              return 1;
            }
            return 0;
          }))
      }}>Sort by Desc</button>
      {/*  map through the users data and pass props to the Userdetails component */}
      {data.map((el) => {
        return <UserDetails user = {el} key={el.id} />
      })}
    </div>
  );
}

export default App;
