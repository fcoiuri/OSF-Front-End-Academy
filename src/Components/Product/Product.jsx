import React from "react";
import styles from "./Product.module.css";
import { Navigation } from "../Navigation";

//"image": "./productsImages/WhiteTable.png",
export const Product = (props) => {
  return (
    <div className={styles.bg}>
      <div>
        <Navigation local={"Category Landing"} />
        <div className={styles.title}>Ruffle Front V-Neck Cardigan</div>
        <div
          id="carousel"
          className={`carousel slide carousel-fade ${styles.container}`}
          data-mdb-ride="carousel"
        >
          <div className="carousel-inner mb-5">
            <div className="carousel-item active">
              <img
                src="./productsImages/pdp-images/PG.10216885.JJ169XX.PZ.jpg"
                className="d-block w-60"
                alt="Product"
                style={{ height: "50vh" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./productsImages/pdp-images/PG.10216885.JJ169XX.BZ.jpg"
                className="d-block w-60"
                style={{ height: "50vh" }}
                alt="Product"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./productsImages/pdp-images/PG.10216885.JJ8UTXX.PZ.jpg"
                className="d-block w-60"
                style={{ height: "50vh" }}
                alt="Product"
              />
            </div>
          </div>
          <div
            className="carousel-indicators"
            style={{
              flexDirection: "column",
              padding: "1vw",
              marginLeft: "30rem",
              paddingBottom: "8rem",
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
                src="./productsImages/pdp-images/PG.10216885.JJ169XX.PZ.jpg"
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
                src="./productsImages/pdp-images/PG.10216885.JJ169XX.BZ.jpg"
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
                src="./productsImages/pdp-images/PG.10216885.JJ8UTXX.PZ.jpg"
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
                src="./productsImages/pdp-images/PG.10216885.JJ8UTXX.BZ.jpg"
                alt="Product"
                style={{ width: "5vw", height: "8vh" }}
              />
            </button>
          </div>
          <div className={styles.price}>$299.99</div>
        </div>
      </div>
    </div>
  );
};
