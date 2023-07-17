import jsonData from "../nonfiction.json"
import BookCard from "./BookCard";
export default function NonFiction() {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
        {jsonData.map((el, id) => {
          return <BookCard title={el.title} img={el.img} author={el.author} year={el.year} price={el.price} key={id}></BookCard>
        })}
      </div>
    </div>
  );
}
