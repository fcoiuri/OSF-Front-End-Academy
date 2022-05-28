import React from "react";
import styles from "./Product.module.css";
import { Navigation } from "../Navigation";
import { default as plus } from "../../icons/+.svg";
import { default as minus } from "../../icons/minus.svg";

export const Product = (props) => {
  const addProductCart = () => {
    console.log("Added to the cart");
  };
  const removeProductCart = () => {
    console.log("Removed to the cart");
  };
  return (
    <div className={styles.bg}>
      <div>
        <div className={`col-5 ${styles.navigation}`}>
          <Navigation local={"Category Landing"} />
        </div>
        <div className={styles.title}>Ruffle Front V-Neck Cardigan</div>
        <div
          id="carousel"
          className={`carousel slide carousel-fade ${styles.container}`}
          data-mdb-ride="carousel"
        >
          <div className="carousel-inner mb-5">
            <div className="carousel-item active">
              <img
                src="./productsImages/PG.10216885.JJ169XX.PZ.jpg"
                className="d-block w-60"
                alt="Product"
                style={{ height: "50vh" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./productsImages/PG.10216885.JJ169XX.BZ.jpg"
                className="d-block w-60"
                style={{ height: "50vh" }}
                alt="Product"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./productsImages/PG.10216885.JJ8UTXX.PZ.jpg"
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
                marginLeft: "30rem",
                paddingBottom: "7rem",
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
                  src="./productsImages/PG.10216885.JJ169XX.PZ.jpg"
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
                  src="./productsImages/PG.10216885.JJ169XX.BZ.jpg"
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
                  src="./productsImages/PG.10216885.JJ8UTXX.PZ.jpg"
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
                  src="./productsImages/PG.10216885.JJ8UTXX.BZ.jpg"
                  alt="Product"
                  style={{ width: "5vw", height: "8vh" }}
                />
              </button>
            </div>
            <div className={`col-8 ${styles.productDescription}`}>
              <div className={styles.price}>$299.99</div>
              
            </div>
          </div>
        </div>
            
              <button className={styles.addCart} type="button" onClick={addProductCart}>
                <a
                  href="javascript:void(0);"
                  role="button"
                  className={styles.addCartButton}
                >
                  Add to cart
                </a>
              </button>
      </div>
    </div>
  );
};
