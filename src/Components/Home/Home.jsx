import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { PopularItems } from "../PopularItems";
import { CarouselBanner } from "../CarouselBanner";
import { Banner } from "../Banner";
import { FeaturedProducts } from "../FeaturedProducts";
import { Purpose } from "../Purpose";
import useWindowDimensions from "../../_utils/size";
import { Release } from "../Release";

export const Home = () => {
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
    <React.Fragment>
      <CarouselBanner />
      <PopularItems />
      <Banner />
      {!isMobile && <FeaturedProducts />}
      <Purpose />
      <Release />
    </React.Fragment>
  );
};
