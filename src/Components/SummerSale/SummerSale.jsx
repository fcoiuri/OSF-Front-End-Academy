import React from "react";
import styles from "./SummerSale.module.css";
import { default as facebook } from "../../icons/facebookBlue.svg";
import { default as summerSale } from "../../icons/summerSale.svg";

export default function SummerSale() {
  return (
    <React.Fragment>
      <div className={styles.summerSale}>
        <div className={styles.summerSaleDiscount}>55%</div>
        <div className={styles.summerSaleDiscountText}>
          Summer
          <br /> Sales
        </div>
        <img className={styles.icoSummerSale} src={summerSale} />
      </div>
      <div className={styles.followFacebook}>Follow us on Facebook</div>
      <div className={styles.descriptionFollowFacebook}>
        Sed ut perspiciatis unde omnis iste natus error sit
      </div>
      <button className={styles.buttonFacebook} type="button">
        <a
          href="javascript:void(0);"
          role="button"
          className={styles.followButton}
        >
          <img src={facebook} width="25" height="15" alt="Load More" />
          FOLLOW
        </a>
      </button>
    </React.Fragment>
  );
}
