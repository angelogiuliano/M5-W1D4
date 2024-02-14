import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Book = ({ imgSrc, title, category, price }) => {
  return (
    <Card className="px-0" style={{ width: "18rem" }}>
      <Card.Img variant="img" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <b>Category:</b> {category}
        </Card.Text>
        <Card.Text>
          <b>Price:</b> {price}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
};
