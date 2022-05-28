import React from "react";
import styles from "./FeaturedProducts.module.css";
import { default as threeTraces } from "../../icons/threeTraces.svg";
import { default as arrow } from "../../icons/arrow.svg";

export const FeaturedProducts = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.title}>Featured Products</div>
      <div className={styles.subtitle}>
        Unde omnis iste natus error sit voluptatem
      </div>
      <div className={styles.trace}>
        <img src={threeTraces} alt="Three Traces" />
      </div>
    </div>
  );
};
