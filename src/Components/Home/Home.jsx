import React from "react";
import styles from "./Home.module.css";
import { PopularItems } from "../PopularItems";
import { CarouselBanner } from "../CarouselBanner";
import { Banner } from "../Banner";
import { FeaturedProducts } from "../FeaturedProducts";
import { Purpose } from "../Purpose";

export const Home = () => {
  return (
    <React.Fragment>
      <CarouselBanner />
      <PopularItems />
      <Banner />
      <FeaturedProducts />
      <Purpose/>
    </React.Fragment>
  );
};
