import { React, useState, useEffect } from "react";
import { Book } from "./Book/Book.jsx";
import { Circles } from "react-loader-spinner";

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmMWUzOTA0NTcyZjAwMTk0OTM4ZTMiLCJpYXQiOjE3MDgwNzI1MDUsImV4cCI6MTcwOTI4MjEwNX0.6-KKXlP5uRZLL4LUkJTAdLQh5w9FONCY7pWnU5sT8G0"

export function AllTheBooks() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [initialBooks, setInitialBooks] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/books",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmMWUzOTA0NTcyZjAwMTk0OTM4ZTMiLCJpYXQiOjE3MDgwNzI1MDUsImV4cCI6MTcwOTI4MjEwNX0.6-KKXlP5uRZLL4LUkJTAdLQh5w9FONCY7pWnU5sT8G0",
            },
          }
        );

        const data = await response.json();
        setFilteredBooks(data);
        setInitialBooks(data);
      };
      fetchData();
    } catch (e) {
      return (
        <div>
          <p>${e.message}</p>
        </div>
      );
    }
  }, []);

  const handleInput = (input) => {
    if (input.length > 2) {
      setFilteredBooks(
        filteredBooks.filter((book) =>
          book.title.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setFilteredBooks(initialBooks);
    }
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
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => {
            return (
              <Book
                key={book.asin}
                asin={book.asin}
                imgSrc={book.img}
                price={book.price}
                title={book.title}
                category={book.category}
              />
            );
          })
        ) : (
          <div className="m-3 circle-cont w-100 d-flex justify-content-center">
            <Circles
              height="80"
              width="80"
              color="#000"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
      </div>
    </>
  );
}
