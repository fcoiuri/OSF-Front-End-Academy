import React from "react";
import styles from "./FeaturedProducts.module.css";
import { default as threeTraces } from "../../icons/threeTraces.svg";
import { ProductTile } from "../ProductTile";
import products from "../../data/products.json";

export const FeaturedProducts = () => {

  const showProducts = products.slice(0, 4).map((data) => {
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
      <div className={styles.title}>Featured Products</div>
      <div className={styles.subtitle}>
        Unde omnis iste natus error sit voluptatem
      </div>
      <div className={styles.trace}>
        <img src={threeTraces} alt="Three Traces" />
      </div>
      <div className={`card-deck ${styles.products}`}>
        {showProducts}
      </div>
    </div>
  );
};
