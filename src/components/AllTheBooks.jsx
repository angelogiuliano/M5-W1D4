import { React, useState } from "react";
import { Book } from "./Book.jsx";
import jsonData from "../books/horror.json";
import { Placeholder } from "react-bootstrap";

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
    <>
      <div className="input-container w-100 d-flex justify-content-center">
        <input
          type="text"
          className="w-50 m-4"
          onChange={(e) => handleInput(e.target.value)}
          placeholder="Search your book here!"
        />
      </div>
      <div className="row justify-content-center gap-5">
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
    </>
  );
}
