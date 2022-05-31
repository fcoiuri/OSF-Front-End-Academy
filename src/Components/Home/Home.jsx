import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { PopularItems } from "../PopularItems";
import { CarouselBanner } from "../CarouselBanner";
import { Banner } from "../Banner";
import { FeaturedProducts } from "../FeaturedProducts";
import { Purpose } from "../Purpose";

export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const _handleResize = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", _handleResize);
  });

  return (
    <React.Fragment>
      <CarouselBanner />
      <PopularItems />
      <Banner />
      <FeaturedProducts />
      <Purpose />
    </React.Fragment>
  );
};
