import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useCartContext from "../store/CartContext";

function CartWidget(props) {
  const { itemsTotal } = useCartContext();
  const totalItems = itemsTotal();

  return (
    <LinkContainer to="/cart" className="text-dark">
      <div className="cart-icon">
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
        {totalItems ? (
          <div className="mostrar-cantidad">{totalItems}</div>
        ) : (
          <div className="mostrar-cantidad2">{totalItems}</div>
        )}
      </div>
    </LinkContainer>
  );
}

export default CartWidget;
