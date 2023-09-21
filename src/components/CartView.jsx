import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Badge, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCartContext from "../store/CartContext";

function CartView({ greeting }) {
  const { cart, removeFromCart, clearCart, itemsTotal, precioTotal } =
    useCartContext();
  const [isActive, setActive] = useState(false);

  const pluralizeWord = (singularWord, pluralWord, count) => {
    return count > 1 ? pluralWord : singularWord;
  };

  const handleVaciar = () => {
    const Toast = Swal.mixin({
      toast: true,
      background: "#DFA822",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Carrito vaciado",
    });
    clearCart();
  };

  const handleRemove = () => {
    cart.forEach((itemCart) => {
      setActive(isActive);

      const Toast = Swal.mixin({
        toast: true,
        background: "#DFA822",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `${itemCart.cant} ${itemCart.name} ${pluralizeWord(
          "eliminada",
          "eliminadas",
          itemCart.cant
        )} del carrito`,
      });

      removeFromCart(itemCart.id);
    });
  };

  useEffect(() => {
    const setTitle = (title) => {
      document.title = title;
    };
    setTitle("Lolita - Carrito");
  }, []);

  if (cart.length === 0) {
    return (
      <section id="Carrito" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-12">
            <p>Sin items</p>
            <p></p>
            <Link to="/">Volver al menu</Link>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        id="carrito"
        className="py-2 text-center container slide-in-fwd-center"
      >
        <div className="row py-lg-2">
          <div>
            <Badge bg="info" className="m-1">
              <h6>Total de items: {itemsTotal()}</h6>
            </Badge>
            <Badge className="m-3" bg="info">
              <h6>Total: {precioTotal()} $</h6>
            </Badge>
            <div></div>
            <div>
              <Link to="/">Volver al catálogo</Link>
            </div>
          </div>
        </div>
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
              {cart.map((itemCart) => {
                return (
                  <Container
                    id={itemCart.id}
                    className={isActive ? "bounce-out-top" : null}
                    key={itemCart.id}
                  >
                    <Card className="bg-secondary shadow-lg p-3 mb-3 mr-2 ml-2 rounded text-center">
                      <Card.Title>
                        {itemCart.name}
                        <hr></hr>
                        Cantidad: {itemCart.cant}
                      </Card.Title>
                      <Card.Img
                        variant="top"
                        src={itemCart.picture}
                        alt={itemCart.name}
                      />
                      <Card.Body>
                        <Card.Text>Categoría: {itemCart.category} </Card.Text>
                        <Badge className="m-1" bg="warning" text="dark">
                          <h6>
                            Total (Sin IVA): {itemCart.price * itemCart.cant} $
                          </h6>
                        </Badge>
                        <Button
                          onClick={handleRemove}
                          className="btn btn-danger w-50 mt-3"
                        >
                          Eliminar
                        </Button>
                      </Card.Body>
                    </Card>
                  </Container>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row py-lg-2">
          <div>
            <Card>
              <Card.Body>
                <Card.Title>Total de items: {itemsTotal()}</Card.Title>
                <Card.Text>
                  <h3>Total: {precioTotal()} $</h3>
                </Card.Text>
                <Link to="/checkout">
                  <Button className="bg-primary m3">Ir al pago</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Button className="m-3 bg-danger" onClick={handleVaciar}>
          Vaciar carrito
        </Button>
      </section>
    );
  }
}

export default CartView;
