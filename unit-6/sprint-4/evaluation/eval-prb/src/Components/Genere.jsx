import React from "react";

function Genere({arr}) {
  return <div data-test-id="genere-chips">
    {
      arr.map((el,id)=>{
        return <button key={id}>{el}</button>
      })
    }
  </div>;
}

export default Genere;
