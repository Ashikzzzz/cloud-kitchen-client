import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/image/logo-1.png";
import { Image } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="H-main" collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand href="#home">
            <Image to="/" className="logo-I" src={logo} alt=""></Image>
            <Link className="style-H" to="/">
              {" "}
              AshikzZZ Kitchen
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Link className="style-H " href="#features">
                My Review
              </Link>
              <Link className="style-H" href="#pricing">
                Add Service
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
