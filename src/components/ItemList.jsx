import React from "react";
import Item from "./Item.jsx";
import { Container } from "react-bootstrap";

function ItemList({ items }) {
  return (
    <>
      {items.map((thisitem) => {
        return (
          <Container key={thisitem.id}>
            <Item
              picture={thisitem.picture}
              category={thisitem.category}
              stock={thisitem.stock}
              item={thisitem.id}
              name={thisitem.name}
              description={thisitem.description}
              ingredients={thisitem.ingredients}
              price={thisitem.price}
            />
          </Container>
        );
      })}
    </>
  );
}

export default ItemList;
