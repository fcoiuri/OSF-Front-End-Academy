import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Home } from "./Components/Home";
import { Appbar } from "./Components/Appbar";
import { Footer } from "./Components/Footer";
import { NotFound } from "./Components/NotFound";
import { Product } from "./Components/Product";
import { Products } from "./Components/Products";
import { Cart } from "./Components/Cart/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Appbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
