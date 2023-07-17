import React ,{useEffect , useState} from "react";
import Card from "../Components/Card";
import Pagination from "../Components/Pagination";

function Home() {
  let [data,setData] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`)
    .then((res)=>res.json())
    .then((movieData)=>{
      setData(movieData);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
      <div data-test-id="container">
        {
          data.map((el)=>{
            return <Card name={el.name} genere={el.genere} actor={el.actor} language={el.language} pics={el.pics} averageReview={el.averageReview} id={el.id}/>
          })
        }
      </div>
      {/* Here will come the Pagination component */}
      <Pagination/>
    </>
  );
}

export default Home;
