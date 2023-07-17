import React from "react";

function Genere({arr}) {
  return <div data-test-id="genere-chips">
    {
      arr.map((el,id)=>{
        return <div key={id}>{el}</div>
      })
    }
  </div>;
}

export default Genere;
