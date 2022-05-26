import React from "react";
import styles from "./Home.module.css";
import Appbar from "../Appbar";
import PopularItems from "../PopularItems";
import CarouselBanner from "../CarouselBanner";
import SummerSale from "../SummerSale";
import Banner from "../Banner";

export default function Home() {
  return (
    <React.Fragment>
      <CarouselBanner />

      <PopularItems />
      <div>
        <Banner />
      </div>
    </React.Fragment>
  );
}
