import React, { useState } from "react";
import styles from "./Products.module.css";
import { Navigation } from "../Navigation";
import { ProductTile } from "../ProductTile";
import products from "../../data/products.json";


export const Products = (props) => {
  const [showMore, setShowMore] = useState(false);

  const showProducts = products.map((data) => {
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

  const showMoreProducts = products.slice(8).map((data) => {
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
    <div className={styles.bg}>
      <div className={styles.navigation}>
        <Navigation local={"Category Landing Services"} />
      </div>
      <div className={styles.title}>Services</div>
      <div className={styles.results}>{products.length} results in apparel</div>
      <div className={`card-deck ${styles.showProducts}`}>
        {showProducts}
        {showMore && showMoreProducts}
      </div>
      {!showMore && (
        <button className={styles.loadMore} type="button">
          <a
            href="javascript:void(0);"
            role="button"
            onClick={() => setShowMore(!showMore)}
            className={styles.loadMoreButton}
          >
            LOAD MORE
          </a>
        </button>
      )}
    </div>
  );
};

/**
 * <div className="card-deck">
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
 * 
 */
