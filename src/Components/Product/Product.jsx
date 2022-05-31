import React, { useState, useEffect } from "react";
import styles from "./Product.module.css";
import { Navigation } from "../Navigation";
import { default as plus } from "../../icons/+.svg";
import { default as minus } from "../../icons/minus.svg";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/action";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  const addProductCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const getProduct = products[id];
    setProduct(getProduct);
  });

  return (
    <div className={styles.bg}>
      <div>
        <div className={`col-5 ${styles.navigation}`}>
          <Navigation local={"Category Landing"} secondLocal={product.title} />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div
          id="carousel"
          className={`carousel slide carousel-fade ${styles.container}`}
          data-mdb-ride="carousel"
        >
          <div className="carousel-inner mb-5">
            <div className="carousel-item active">
              <img
                src={product.image}
                className="d-block w-60"
                alt="Product"
                style={{ height: "50vh" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="../productsImages/NoImageFound.png"
                className="d-block w-60"
                style={{ height: "50vh" }}
                alt="Product"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../productsImages/NoImageFound.png"
                className="d-block w-60"
                style={{ height: "50vh" }}
                alt="Product"
              />
            </div>
          </div>
          <div className="col-7">
            <div
              className="carousel-indicators col-4"
              style={{
                flexDirection: "column",
                // padding: "1vw",
                marginLeft: "32rem",
                paddingBottom: "6rem",
              }}
            >
              <button
                id="carousel-selector-0"
                data-bs-slide-to="0"
                data-bs-target="#carousel"
                type="button"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                style={{ width: "4.5vw", height: "8vh" }}
              >
                <img
                  className="img-fluid d-block"
                  style={{ width: "4.5vw", height: "8vh" }}
                  src={product.image}
                  alt="Product"
                />
              </button>

              <button
                type="button"
                id="carousel-selector-1"
                data-bs-slide-to="1"
                data-bs-target="#carousel"
                aria-label="Slide 2"
                style={{ width: "4.5vw", height: "8vh" }}
              >
                <img
                  className="img-fluid d-block"
                  src="../productsImages/NoImageFound.png"
                  alt="Product"
                  style={{ width: "4.5vw", height: "8vh" }}
                />
              </button>

              <button
                type="button"
                id="carousel-selector-2"
                data-bs-slide-to="2"
                data-bs-target="#carousel"
                aria-label="Slide 3"
                style={{ width: "4.5vw", height: "8vh" }}
              >
                <img
                  className="img-fluid d-block"
                  src="../productsImages/NoImageFound.png"
                  alt="Product"
                  style={{ width: "4.5vw", height: "8vh" }}
                />
              </button>
              <button
                type="button"
                id="carousel-selector-1"
                data-bs-slide-to="1"
                data-bs-target="#carousel"
                aria-label="Slide 2"
                style={{ width: "4.5vw", height: "8vh" }}
              >
                <img
                  className="img-fluid d-block"
                  src="../productsImages/NoImageFound.png"
                  alt="Product"
                  style={{ width: "5vw", height: "8vh" }}
                />
              </button>
            </div>
            <div className={`col-8 ${styles.productDescription}`}>
              <div className={`fw-bold display-6 my-1 ${styles.price}`}>
                ${product.price}
              </div>
            </div>
          </div>
        </div>

        <button
          className={styles.addCart}
          type="button"
          onClick={()=>addProductCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
