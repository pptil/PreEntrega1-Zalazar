import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CartView from "./components/CartView";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { HashRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./store/CartContext";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <>
      <CartContextProvider>
        <HashRouter>
          <NavBar />
          <main>
            <Routes>
              <Route path="/checkout" element={<CheckOut />} />
              <Route
                path="/item/:itemid"
                element={<ItemDetailContainer greeting="Detalle de producto" />}
              />
              <Route
                path="/"
                element={<ItemListContainer greeting="Ropa!" />}
              />
              <Route
                path="/cart"
                element={<CartView greeting="Este es su carrito" />}
              />
              <Route
                path="/category/:categoryid"
                element={<ItemListContainer greeting="Categoría" />}
              />
            </Routes>
          </main>
        </HashRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
