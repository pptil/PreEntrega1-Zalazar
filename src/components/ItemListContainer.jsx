import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";

import data from "../data/products.json";

export const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filterProductsByCategory = (category) => {
    if (!category) {
      return data;
    } else {
      return data.filter((product) => product.category === category);
    }
  };

  useEffect(() => {
    setIsLoading(true); // Agregamos esto para mostrar "Cargando..." mientras se actualiza la lista.
    setTimeout(() => {
      const filteredProducts = filterProductsByCategory(id);
      setProducts(filteredProducts);
      setIsLoading(false);
    }, 2000);
  }, [id]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <Container className="mt-4">
      <h1>{greeting}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ItemList products={products} />
      </div>
    </Container>
  );
};
