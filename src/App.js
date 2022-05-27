import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import { Product } from "./Components/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
