import React from "react";
import Genere from "./Genere";
import {Link} from "react-router-dom";
function Card({ name, genere, actor, language, pics, averageReview, id }) {
  return (
    <div
      data-test-id="movie-card"
      className="bg-white rounded-md shadow-md overflow-hidden"
      key={id}
    >
     <img src={pics} alt="" />
     <h1>{name}</h1>
     <p>Language: {language}</p>
     <p>Actor :{actor}</p>
     <h2>Ratings :{averageReview}</h2>
     <Genere arr={genere}/>
     <Link to={`/rate/${id}`}>Rate</Link>
    </div>
  );
}

export default Card;
