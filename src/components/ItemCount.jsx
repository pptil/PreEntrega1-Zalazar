import Button from "react-bootstrap/Button";
import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const Incrementar = () => {
    if (stock > count) {
      setCount((prev) => prev + 1);
    }
  };
  const Decrementar = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  // const onAdd = () => {
  //   alert(count);
  // };
  return (
    <>
      <div className="itemcount">
        <span onClick={Decrementar}>-</span>
        <span>{count}</span>
        <span onClick={Incrementar}>+</span>
      </div>
      <Button variant="primary" onClick={() => onAdd(count)}>
        Agregar Al Carrito
      </Button>{" "}
    </>
  );
};
