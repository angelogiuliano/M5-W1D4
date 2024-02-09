import { React } from "react";
import { Book } from "./Book.jsx";
import jsonData from "../books/horror.json";

export function AllTheBooks() {
  const booksData = jsonData;

  return (
    <div className="row justify-content-center gap-5">
      {booksData.map((book) => {
        return (
            <Book
            key={book.asin}
            imgSrc={book.img}
            price={book.price}
            title={book.title}
            category={book.category}
          />
        )
      })}
    </div>
  );
}
