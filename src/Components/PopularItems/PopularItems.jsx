import React, { useState, useEffect } from "react";
import { ProductTile } from "../ProductTile";
import styles from "./PopularItems.module.css";
import products from "../../data/products.json";
import { default as loadMore } from "../../icons/loadMore.svg";
import useWindowDimensions from "../../_utils/size";

export const PopularItems = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  const showProducts = products.slice(0, 8).map((data) => {
    return (
      <ProductTile
        key={data.id}
        title={data.title}
        price={data.price}
        image={data.image}
        product={data}
        id={data.id}
      />
    );
  });

  //console.log(showProducts[0])
  const showMoreProducts = products.slice(8, 16).map((data) => {
    return (
      <ProductTile
        key={data.id}
        title={data.title}
        price={data.price}
        image={data.image}
        product={data}
        id={data.id}
      />
    );
  });

  return (
    <div className={styles.showItems}>
      <div className={styles.title}>Popular Items</div>
      {isMobile && (
        <React.Fragment>
           <div
        id="carouselPopularItems"
        className={`carousel carousel-dark ${styles.carousel}`}
        data-bs-ride="carousel"
      >
        <div className={`carousel-indicators ${styles.carouselIndicators}`}>
          <button
            type="button"
            data-bs-target="#carouselPopularItems"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselPopularItems"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselPopularItems"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselPopularItems"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselPopularItems"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
              {showProducts[0]}
              </div>
              <div className="carousel-item">
              {showProducts[1]}
              </div>
              <div className="carousel-item">
              {showProducts[2]}
              </div>
              <div className="carousel-item">
              {showProducts[3]}
              </div>
              <div className="carousel-item">
              {showProducts[4]}
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      {!isMobile && (
        <React.Fragment>
          <div className="card-deck">
            {showProducts}
            {showMore && showMoreProducts}
          </div>
          <button className={styles.loadMore} type="button">
            <a
              href="javascript:void(0);"
              role="button"
              onClick={() => setShowMore(!showMore)}
              className={styles.loadMoreButton}
            >
              {showMore ? "HIDE PRODUCTS" : "LOAD MORE"}
              <img src={loadMore} width="25" height="15" alt="Load More" />
            </a>
          </button>
        </React.Fragment>
      )}
    </div>
  );
};
