import React, { useState, useEffect } from "react";
import styles from "./CarouselBanner.module.css";
import { default as image1 } from "./imgs/1.png";
import { default as image2 } from "./imgs/2.png";
import { default as image3 } from "./imgs/3.png";
import { SummerSale } from "../SummerSale";
import { Products } from "../Products";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../_utils/size";

export const CarouselBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className="row" style={{ flexWrap: "nowrap" }}>
      <div
        id="carouselExampleDark"
        className={`carousel carousel-dark col-9 ${styles.carousel}`}
        data-bs-ride="carousel"
      >
        <div className={`carousel-indicators ${styles.carouselIndicators}`}>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div
              className={`carousel-caption ${styles.textFirstSlider}`}
            >
              <h1 className={`col-9 ${styles.titleSlider}`}>
                Control and manage any device with cloud solutions
              </h1>
              <p className={styles.descriptionSlider}>
                Improve business performance and the user experience with the
                right mix of IoT technology and processes
              </p>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <button className={styles.viewmore} type="button">
                  VIEW MORE
                </button>
              </Link>
            </div>
            {!isMobile && (
              <div className={styles.images}>
                <img src={image1} className="d-block img-fluid" alt="..." />
              </div>
            )}
            {isMobile && (
              <div className={` ${styles.images}`}>
                <img
                  src={image1}
                  className="d-block img-fluid"
                  style={{ height: "50vh", width: "60vw" }}
                  alt="..."
                />
              </div>
            )}
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div
              className={`carousel-caption text-right ${styles.textSecondSlider}`}
            >
              <h1 className={` ${styles.titleSlider}`}>
                Control and manage any device with cloud solutions
              </h1>
              <p className={styles.descriptionSlider}>
                Improve business performance and the user experience with the
                right mix of IoT technology and processes
              </p>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <button className={styles.viewmore} type="button">
                  VIEW MORE
                </button>
              </Link>
            </div>
            {!isMobile && (
              <div className={styles.images}>
                <img src={image2} className="d-block img-fluid" alt="..." />
              </div>
            )}
            {isMobile && (
              <div className={` ${styles.images}`}>
                <img
                  src={image2}
                  className="d-block img-fluid"
                  style={{ height: "50vh", width: "60vw" }}
                  alt="..."
                />
              </div>
            )}
          </div>
          <div className="carousel-item">
            {!isMobile && (
              <div className={styles.images}>
                <img src={image3} className="d-block img-fluid" alt="..." />
              </div>
            )}
            {isMobile && (
              <div className={` ${styles.images}`}>
                <img
                  src={image3}
                  className="d-block img-fluid"
                  style={{ height: "50vh", width: "60vw" }}
                  alt="..."
                />
              </div>
            )}
            <div
              className={`carousel-caption text-right ${styles.textThirdSlider}`}
            >
              <h1 className={`${styles.titleSlider}`}>
                Control and manage any device with cloud solutions
              </h1>
              <p className={styles.descriptionSlider}>
                Improve business performance and the user experience with the
                right mix of IoT technology and processes
              </p>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <button className={styles.viewmore} type="button">
                  VIEW MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {!isMobile && (
        <div className={`col-3 ${styles.summersale}`}>
          <SummerSale />
        </div>
      )}
    </div>
  );
};
