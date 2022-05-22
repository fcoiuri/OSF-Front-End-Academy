import React from "react";
import styles from "./CarouselBanner.module.css";
import { default as image1 } from "./imgs/1.png";
import { default as image2 } from "./imgs/2.png";
import { default as image3 } from "./imgs/3.png";

export default function CarouselBanner() {
  return (
    <div
      id="carouselExampleDark"
      class={`carousel carousel-dark ${styles.carousel}`}
      // style={{width:"100%", height: "50%"}}
      data-bs-ride="carousel"
    >
      <div className={`carousel-indicators ${styles.carouselIndicators}`}>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
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
      
      {/* <div className={`carousel-inner ${styles.carouselImageText}`}> */}
      <div className="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <div
            className={`carousel-caption d-none d-md-block ${styles.textFirstSlider}`}
          >
            <h1 className={`col-9 ${styles.titleSlider}`}>
              Control and manage any device with cloud solutions
            </h1>
            <p className={styles.descriptionSlider}>
              Improve business performance and the user experience with the
              right mix of IoT technology and processes
            </p>
            <button className={styles.loadMore} type="button">
              VIEW MORE
            </button>
          </div>
          <div className={styles.images}>
            <img src={image1} class="d-block" alt="..." />
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <div
            className={`carousel-caption d-none d-md-block ${styles.textSecondSlider}`}
          >
            <h1 className={` ${styles.titleSlider}`}>
              Control and manage any device with cloud solutions
            </h1>
            <p className={styles.descriptionSlider}>
              Improve business performance and the user experience with the
              right mix of IoT technology and processes
            </p>
            <button className={styles.loadMore} type="button">
              VIEW MORE
            </button>
          </div>
          <div className={styles.images}>
            <img src={image2} class="d-block" alt="..." />
          </div>
        </div>
        <div class="carousel-item">
          <div className={styles.images}>
            <img src={image3} class="d-block" alt="..." />
          </div>
          <div
            className={`carousel-caption d-none d-md-block ${styles.textThirdSlider}`}
          >
            <h1 className={`col-9 ${styles.titleSlider}`}>
              Control and manage any device with cloud solutions
            </h1>
            <p className={styles.descriptionSlider}>
              Improve business performance and the user experience with the
              right mix of IoT technology and processes
            </p>
            <button className={styles.loadMore} type="button">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
