import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './pages/homepage';
import PostData from './pages/formdata';
function App() {
  let [data, setData] = useState([]);
  const fetchdata = async () => {
    const res = await fetch("https://travel-api-0fdo.onrender.com/api");
    const jsonData = await res.json();
    setData(jsonData.data);
  }
  const deletedata = async (id) => {
    await fetch(`https://travel-api-0fdo.onrender.com/api/${id}`, {
      method: "DELETE",
      headers:{
        'Content-type':'Application/json'
      }
    });
    fetchdata();
  }
  useEffect(() => {
    fetchdata();
  }, [])
  const postData = async(formdata)=>{
    await fetch('https://travel-api-0fdo.onrender.com/api',{
      method:"POST",
      headers:{
        'Content-type':'Application/json'
      },
      body:JSON.stringify(formdata)
    })
    fetchdata()
  }
  return (
    <div className="App">
      <PostData onSubmit={postData}/>
      <Home data={data} onDelete={deletedata}/>
    </div>
  );
}

export default App;
