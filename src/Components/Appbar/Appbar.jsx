import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import { Login } from "../Login";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useWindowDimensions from "../../_utils/size";

export const Appbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [sizeCart, setSizeCart] = useState(0);
  const [sizeWishlist, setSizeWishlist] = useState(0);

  const state = useSelector((state) => state.handleCart);
  const stateWishList = useSelector((state) => state.handleWishlist);

  const _handleLogin = () => setShowLogin(!showLogin);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setSizeCart(state.length);
    setSizeWishlist(stateWishList.length);
  });

  useEffect(() => {
    if (width < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <React.Fragment>
      <Navbar expand="lg" sticky="top" className={styles.navbar}>
        <Container>
          {isMobile && (
            <Link to="/" style={{ textDecoration: "none" }}>
              <Navbar.Brand
                href="#"
                className="m-auto "
                style={{ textAlign: "center" }}
              >
                <img alt="Logo" src={onlyLogo} />
              </Navbar.Brand>
            </Link>
          )}
          {!isMobile && (
            <Link to="/" style={{ textDecoration: "none" }}>
              <Navbar.Brand href="#">
                <img alt="Logo" src={logoWithName} />
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
              <NavLink to="company" style={{ textDecoration: "none" }}>
                <Nav.Link href="#company">COMPANY</Nav.Link>
              </NavLink>
              <NavLink to="library" style={{ textDecoration: "none" }}>
                <Nav.Link href="#library">LIBRARY</Nav.Link>
              </NavLink>
              <NavLink to="contact_us" style={{ textDecoration: "none" }}>
                <Nav.Link href="#contact_us">CONTACT US</Nav.Link>
              </NavLink>
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
            {!isMobile && (
              <Nav className={styles.iconsNavbar}>
                <NavLink to="search">
                  <Navbar.Brand href="#search">
                    <img alt="Search" src={search} />
                  </Navbar.Brand>
                </NavLink>
                <Navbar.Brand href="javascript:;">
                  <img alt="Login" src={login} onClick={_handleLogin} />
                </Navbar.Brand>
                <NavLink to="wishlist">
                  <Navbar.Brand>
                    <img alt="Wishlist" src={wishlist} />
                    {sizeWishlist !== 0 && (
                      <span className={styles.cart}>{sizeWishlist}</span>
                    )}
                  </Navbar.Brand>
                </NavLink>
                <NavLink to="cart">
                  <Navbar.Brand>
                    <img alt="Cart" src={bag} />
                    {sizeCart !== 0 && (
                      <span className={styles.cart}>{sizeCart}</span>
                    )}
                  </Navbar.Brand>
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isMobile && (
        <Navbar bg="dark" fixed="bottom" className={styles.navbarFooterMobile}>
          <Nav className="m-auto">
            <Navbar.Brand href="#search">
              <img
                alt="Search"
                src={searchMobile}
                className={styles.navbarFooterMobileChilds}
              />
            </Navbar.Brand>
            <Navbar.Brand href="javascript:;">
              <img alt="Login" src={loginMobile} onClick={_handleLogin} />
            </Navbar.Brand>
            <NavLink to="wishlist">
              <Navbar.Brand>
                <img alt="Wishlist" src={wishlistMobile} />
                {sizeWishlist !== 0 && (
                  <span className={styles.cart}>{sizeWishlist}</span>
                )}
              </Navbar.Brand>
            </NavLink>
            <NavLink to="cart">
              <Navbar.Brand>
                <img alt="Cart" src={bagMobile} />

                {sizeCart !== 0 && (
                  <span className={styles.cart}>{sizeCart}</span>
                )}
              </Navbar.Brand>
            </NavLink>
          </Nav>
        </Navbar>
      )}
      {showLogin && <Login />}
    </React.Fragment>
  );
};
