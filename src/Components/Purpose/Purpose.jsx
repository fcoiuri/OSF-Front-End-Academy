import React from "react";
import styles from "./Purpose.module.css";
import { default as clipboard } from "../../icons/clipboard.svg";
import { default as delivery } from "../../icons/delivery.svg";
import { default as recycle } from "../../icons/recycle.svg";

export const Purpose = (props) => {
  return (
    <div className={styles.bg}>
      <div className={`row ${styles.container}`}>
        <div className="col-4">
          <div className="row">
            <div className="col-6 d-flex align-items-center justify-content-center">
              <img src={delivery} alt="Delivery" />
            </div>
            <div className={`col-6 ${styles.text}`}>
              <div className={styles.title}>Focus</div>
              <div className={styles.description}>
                Our unwavering focus on superior service delivery and building
                next generation competencies
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6 d-flex align-items-center justify-content-center">
              <img src={recycle} alt="Recycle" />
            </div>
            <div className={`col-6 ${styles.text}`}>
              <div className={styles.title}>Method</div>
              <div className={styles.description}>
                A standardized methodology designed to deliver measurable
                business results and predictable costs
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6 d-flex align-items-center justify-content-center">
              <img src={clipboard} alt="Clipboard" />
            </div>
            <div className={`col-6 ${styles.text}`}>
              <div className={styles.title}>Knowledge</div>
              <div className={styles.description}>
                A highly skilled, proactive workforce that reliably improves
                each client's ROI while mitigating their business risk
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
