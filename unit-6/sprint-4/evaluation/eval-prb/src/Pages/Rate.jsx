import React , {useState,useEffect}from "react";
import {useParams} from "react-router-dom";
const Rate = () => {
 const {movie_id} = useParams();
 const [movieData,setMovieData] = useState({});
 useEffect(()=>{
   fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies/${movie_id}`)
     .then((res) => res.json())
     .then((data) => {
       setMovieData(data);
     })
     .catch((err) => {
       console.log(err);
     })
 },[movie_id])
  return (
    <div>
      <select data-test-id="rate-select" onChange={(event)=>{
        let newObj = {...movieData};
        newObj.noOfReviews = Number(movieData.noOfReviews)+1;
        // let oldAvg = Number(movieData.averageReview);
        let newAvg = (movieData.noOfReviews * movieData.averageReview + +(event.target.value)) / newObj.noOfReviews
        newObj.averageReview = newAvg;
       setMovieData(newObj)
      }}>
        <option value="0">Select rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button data-test-id="rate-confirm" onClick={()=>{
        fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies/${movie_id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'Application/json'
          },
          body: JSON.stringify(movieData)
        })
          .then((res) => res.json())
          .then((dat) => { console.log(dat) })
          .catch((err) => { console.log(err) })
      }}>Rate</button>
    </div>
  );
};

export default Rate;
