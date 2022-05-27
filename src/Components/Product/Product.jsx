import React from "react";
import styles from "./Product.module.css";
import Navigation from "../Navigation";
//"image": "./productsImages/WhiteTable.png",
export const Product = () => {
  return (
    <React.Fragment>
      <div classNameName={styles.bg}>
        <Navigation local={"Category Landing"} />
        <div>Product</div>
        <div classNameName={styles.container}>
          <img
            src="./productsImages/pdp-images/PG.10216885.JJ169XX.PZ.jpg"
            alt="Product"
          />
        </div>
      </div>

      <div class="container">
        <div class="row d-flex justify-content-center mt-5">
          <div class="col-md-6">
            <div
              id="myCarousel"
              class="carousel"
              data-bs-ride="carousel"
              align="center"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  {" "}
                  <img
                    src="./productsImages/pdp-images/PG.10216885.JJ169XX.PZ.jpg"
                    class="rounded"
                  />{" "}
                </div>
                <div class="carousel-item">
                  {" "}
                  <img
                    src="./productsImages/pdp-images/PG.10216885.JJ169XX.BZ.jpg"
                    class="rounded"
                  />{" "}
                </div>
                <div class="carousel-item">
                  {" "}
                  <img
                    src="./productsImages/pdp-images/PG.10216885.JJ8UTXX.PZ.jpg"
                    class="rounded"
                  />{" "}
                </div>
              </div>
              <ol class="carousel-indicators">
                <li class="list-inline-item active">
                  {" "}
                  <a
                    id="carousel-selector-0"
                    class="selected"
                    data-bs-slide-to="0"
                    data-bs-target="#myCarousel"
                  >
                    {" "}
                    <img
                      src="./productsImages/pdp-images/PG.10216885.JJ169XX.PZ.jpg"
                      class="img-fluid rounded"
                    />{" "}
                  </a>{" "}
                </li>
                <li class="list-inline-item">
                  {" "}
                  <a
                    id="carousel-selector-1"
                    data-bs-slide-to="1"
                    data-bs-target="#myCarousel"
                  >
                    {" "}
                    <img
                      src="./productsImages/pdp-images/PG.10216885.JJ169XX.BZ.jpg"
                      class="img-fluid rounded"
                    />{" "}
                  </a>{" "}
                </li>
                <li class="list-inline-item">
                  {" "}
                  <a
                    id="carousel-selector-2"
                    data-bs-slide-to="2"
                    data-bs-target="#myCarousel"
                  >
                    {" "}
                    <img
                      src="./productsImages/pdp-images/PG.10216885.JJ8UTXX.PZ.jpg"
                      class="img-fluid rounded"
                    />{" "}
                  </a>{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
