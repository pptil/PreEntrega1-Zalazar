import { CartWidget } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">eCommerce</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>
};