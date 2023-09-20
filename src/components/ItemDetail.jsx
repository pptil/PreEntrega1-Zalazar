import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = (count) => onAdd(product, count);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1> {product.name}</h1>
      <img src={product.category} alt="" />
      <div>{product.stock}</div>
      <ItemCount onAdd={onAdd} stock={product.stock} />
    </div>
  );
};
