import { useState } from "react";
import { CommentArea } from "./CommentArea.jsx";
import { CommentList } from "./CommentList.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./book.css";

export const Book = ({ imgSrc, title, category, price, asin }) => {
  const [selected, setSelected] = useState(false);

  return (
      <Card className="px-0" style={{ width: "18rem" }}>
        <Card.Img
          onClick={() => setSelected(!selected)}
          className={`${selected && "selected"}`}
          variant="img"
          src={imgSrc}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <b>Category:</b> {category}
          </Card.Text>
          <Card.Text>
            <b>Price:</b> {price}
          </Card.Text>
          {selected && <CommentArea asin={asin}/>}
        </Card.Body>
      </Card>
  );
};
