import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/image/logo-1.png";
import { Button, Image } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
            <Link className="style-H" to="/blog">
              Blog
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto "></Nav>
            <Nav>
              {user?.uid || user?.email ? (
                <>
                  <Link className="style-H " to="/myreview">
                    My Review
                  </Link>
                  <Link className="style-H" to="/addservice">
                    Add Service
                  </Link>
                  <Button onClick={handleSignOut} variant="dark" size="sm">
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link className="style-H" to="/login">
                    Login
                  </Link>
                  <Link className="style-H" to="/register">
                    Register
                  </Link>
                </>
              )}

              <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user?.photoURL || user?.email ? (
                  <Image
                    roundedCircle
                    style={{ height: "40px" }}
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
