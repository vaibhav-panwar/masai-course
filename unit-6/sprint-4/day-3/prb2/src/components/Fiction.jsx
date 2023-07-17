import jsonData from "../fiction.json"

import BookCard from "./BookCard";

export default function Fiction() {
 
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container">
        {jsonData.map((el,id)=>{
          return <BookCard title={el.title} img={el.img} author={el.author} year={el.year} price={el.price} key={id}></BookCard>
        })}
      </div>
    </div>
  );
}
console.log(jsonData)