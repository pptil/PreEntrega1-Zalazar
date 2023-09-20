import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = () => {
  const [items, setItems] = useState([]);

  const addItem = (product, quantity) => {
    const alreadyExists = items.some((item) => item.id === product.id);

    if (!alreadyExists) setItems((prev) => [...prev, { ...product, quantity }]);
    else {
      const actualizarProductos = items.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else return item;
      });
      setItems(actualizarProductos);
    }
  };
};
