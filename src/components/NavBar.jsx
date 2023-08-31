import { CartWidget } from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">eCommerce</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/category/Electronica">Electronica</Nav.Link>
          <Nav.Link href="/category/Ropa">Ropa</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
