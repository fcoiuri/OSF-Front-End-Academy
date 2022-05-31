import React, { useState } from "react";
import { ProductTile } from "../ProductTile";
import styles from "./PopularItems.module.css";
import products from "../../data/products.json";
import { default as loadMore } from "../../icons/loadMore.svg";

export const PopularItems = () => {
  const [showMore, setShowMore] = useState(false);

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

  const showMoreProducts = products.slice(8,16).map((data) => {
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
    </div>
  );
};
