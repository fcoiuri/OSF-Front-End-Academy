import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  DropdownButton,
  Dropdown,
  Table,
} from "react-bootstrap/";
import { default as onlyLogo } from "../../icons/onlyLogo.svg";
import styles from "./Appbar.module.css";
import { default as bag } from "../../icons/bag.svg";
import { default as wishlist } from "../../icons/wishlist.svg";
import { default as login } from "../../icons/login.svg";
import { default as search } from "../../icons/search.svg";
import { default as logoWithName } from "../../icons/logoWithName.svg";
import { default as searchMobile } from "../../icons/searchMobile.svg";
import { default as loginMobile } from "../../icons/loginMobile.svg";
import { default as wishlistMobile } from "../../icons/wishlistMobile.svg";
import { default as bagMobile } from "../../icons/bagMobile.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "../Login";

export default function Appbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const _handleLogin = () => setShowLogin(!showLogin);

  const _handleResize = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", _handleResize);
  });

  return (
    <React.Fragment>
      <Navbar expand="lg">
        <Container>
          {isMobile && (
            <Link to="/" style={{ textDecoration: "none" }}>
              <Navbar.Brand href="#" className="m-auto">
                <img alt="Logo" src={onlyLogo} />
              </Navbar.Brand>
            </Link>
          )}
          {!isMobile && (
            <Link to="/" style={{ textDecoration: "none" }}>
              <Navbar.Brand href="#">
                <img alt="Logo" src={onlyLogo} />
              </Navbar.Brand>
            </Link>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavDropdown
                title="SERVICES"
                id="basic-nav-dropdown"
                className={styles.services}
              >
                <NavDropdown.Item href="#action/3.4">
                  PRODUCT CATEGORIES
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <Link to="/acessories" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#javascript:;">
                    Acessories
                  </NavDropdown.Item>
                </Link>
                <Link to="/alcohol" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#javascript:;">
                    Alcohol
                  </NavDropdown.Item>
                </Link>
                <Link to="/art" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#javascript:;">Art</NavDropdown.Item>
                </Link>
                <Link to="/books" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#javascript:;">
                    Books
                  </NavDropdown.Item>
                </Link>
                <Link to="/drink" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#javascript:;">
                    Drink
                  </NavDropdown.Item>
                </Link>
                <Link to="/eletronics" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="javascript:;">
                    Eletronics
                  </NavDropdown.Item>
                </Link>
                <Link to="/gadgets" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#javascript:;">
                    Gadgets
                  </NavDropdown.Item>
                </Link>
                <Link to="/garden" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#javascript:;">
                    Garden
                  </NavDropdown.Item>
                </Link>
                <Link to="/grocery" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#javascript:;">
                    Grocery
                  </NavDropdown.Item>
                </Link>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#javascript:;">Home</NavDropdown.Item>
                </Link>
                <Link to="/jewelry" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#javascript:;">
                    Jewelry
                  </NavDropdown.Item>
                </Link>
                <Link to="/kids-baby" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#javascript:;">
                    Kids & Baby
                  </NavDropdown.Item>
                </Link>
                <Link to="/mensfashion" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#action/3.3">
                    Men's Fashion
                  </NavDropdown.Item>
                </Link>
                <Link to="/mobile" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#action/3.3">Mobile</NavDropdown.Item>
                </Link>
                <Link to="/garden" style={{ textDecoration: "none" }}>
                  <NavDropdown.Item href="#action/3.3">Garden</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Nav.Link href="#home">COMPANY</Nav.Link>
              <Nav.Link href="#link">LIBRARY</Nav.Link>
              <Nav.Link href="#link">CONTACT US</Nav.Link>
            </Nav>
            <Nav className={styles.currencyLanguageNavbar}>
              <NavDropdown title="EN" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">PT-BR</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">ES</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="$ US" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">€ Euro</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">R$ Real</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className={styles.iconsNavbar}>
              <Navbar.Brand href="#search">
                <img alt="Search" src={search} />
              </Navbar.Brand>
              <Navbar.Brand href="javascript:;">
                <img alt="Login" src={login} onClick={_handleLogin} />
              </Navbar.Brand>
              <Navbar.Brand href="#wishlist">
                <img alt="Wishlist" src={wishlist} />
              </Navbar.Brand>
              <Navbar.Brand href="#cart">
                <img alt="Cart" src={bag} />
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isMobile && (
        <Navbar bg="dark" className={styles.navbarFooterMobile}>
          <Nav className="m-auto">
            <Navbar.Brand href="#search">
              <img
                alt="Search"
                src={searchMobile}
                className={styles.navbarFooterMobileChilds}
              />
            </Navbar.Brand>
            <Navbar.Brand href="#login">
              <img alt="Login" src={loginMobile} />
            </Navbar.Brand>
            <Navbar.Brand href="#wishlist">
              <img alt="Wishlist" src={wishlistMobile} />
            </Navbar.Brand>
            <Navbar.Brand href="#cart">
              <img alt="Cart" src={bagMobile} />
            </Navbar.Brand>
          </Nav>
        </Navbar>
      )}
      {showLogin && <Login />}
    </React.Fragment>
  );
}
