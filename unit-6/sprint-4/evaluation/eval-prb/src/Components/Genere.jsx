import React from "react";

function Genere({arr}) {
  return <div data-test-id="genere-chips">
    {
      arr.map((el,id)=>{
        return <p key={id}>{el}</p>
      })
    }
  </div>;
}

export default Genere;
