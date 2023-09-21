import React from "react";
import { Button, Card, Badge, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import useCartContext from "../store/CartContext";

function Item({ item, stock, name, price, picture, category }) {
  const { getItemQuantity, isInCart } = useCartContext();

  return (
    <Card
      key={item.id}
      className="bg-light h-100 shadow-lg p-3 mb-3 mr-2 ml-2 rounded"
    >
      <Card.Title>
        {category}/{name}{" "}
        <Badge className="bg-success mb-4 text-center">
          Disponible: {stock}
        </Badge>
      </Card.Title>
      <span className="position-absolute top-4 end-4 translate-middle badge bg-danger">
        {isInCart(item) ? (
          <>
            <div className="mostrar-cantidadItem">{getItemQuantity(item)}</div>
          </>
        ) : (
          <>
            <div className="mostrar-cantidadItem">0</div>
          </>
        )}
      </span>
      <LinkContainer to={`/item/${item}`}>
        <Card.Img className="picHover" variant="top" src={picture} alt={name} />
      </LinkContainer>
      <Container className="d-flex justify-content-center text-center align-middle w-100 mw-30">
        <Badge bg="success me-2 mb-4 text-center">${price}</Badge>
      </Container>
      <LinkContainer to={`/item/${item}`}>
        <Button className="btn btn-primary">Click para ver el detalle</Button>
      </LinkContainer>
    </Card>
  );
}

export default Item;
