export const ItemDetail = ({ product }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1> {product.name}</h1>
      <img src={product.category} alt="" />
      <div>{product.stock}</div>
    </div>
  );
};
