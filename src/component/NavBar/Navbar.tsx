import React, { useState } from "react";
import "./Navbar.css";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


interface NavBarProps {
  onSearchChange: (searchTerm: string) => void;
  productCount: number;
}

function NavBar({ onSearchChange, productCount }: NavBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="title-nav">
          Indexlivingmall
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="li-nav">
              Home
            </Nav.Link>
          </Nav>
          <Form>
            <Row>
              <Col xs="auto" className="Search">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={handleSearchChange}
                  value={searchTerm}
                />
              </Col>

              <Col xs="auto" className="col">
              <a href="../listProduct/listproduct" className="cartLink">
        <button className="cartButton">
          <img
            className="img-cart"
            src="https://cdn-icons-png.flaticon.com/256/9453/9453946.png"
            alt="Cart"
            width="40px"
          />
          {productCount > 0 && (
            <div className="notify">{productCount}</div>
          )}
        </button>
       
      </a>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
