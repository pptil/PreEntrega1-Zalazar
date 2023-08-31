import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemDetail } from "./ItemDetail";

import data from "../data/products.json";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productById = data.find((product) => product.id === id);

    if (productById) {
      setTimeout(() => {
        setProduct(productById);
        setIsLoading(false);
      }, 2000);
    } else {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <Container className="mt-4">
      <h1>DETALLE</h1>
      <ItemDetail product={product} />
    </Container>
  );
};
