import { React, useState } from "react";
import { Book } from "./Book.jsx";
import jsonData from "../books/horror.json";

export function AllTheBooks() {
  let booksData = jsonData;

  const [filteredBooks, setFilteredBooks] = useState(booksData);

  const handleInput = (input) => {
    setFilteredBooks(
      booksData.filter((book) =>
        book.title.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  return (
    <div className="row justify-content-center gap-5">
      <input
        type="text"
        className=""
        onChange={(e) => handleInput(e.target.value)}
      />
      {filteredBooks.map((book) => {
        return (
          <Book
            key={book.asin}
            imgSrc={book.img}
            price={book.price}
            title={book.title}
            category={book.category}
          />
        );
      })}
    </div>
  );
}
