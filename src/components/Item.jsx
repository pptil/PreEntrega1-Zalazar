import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { ItemCount } from "./ItemCount";

export const Item = ({ product }) => {
  return (
    <Card key={product.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.avatar} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.category}</Card.Text>
        <Link to={`/item/${product.id}`}></Link>
        <ItemCount></ItemCount>
      </Card.Body>
    </Card>
  );
};
