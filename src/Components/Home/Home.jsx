import React from 'react';
import styles from './Home.module.css'
import Appbar from '../Appbar';
import Footer from '../Footer';
import PopularItems from '../PopularItems';
import CarouselBanner from '../CarouselBanner';
import SummerSale from '../SummerSale';
import Banner from '../Banner';

export default function Home() {
  return (
    <React.Fragment>
    
      <div className={styles.carousel}>
      <CarouselBanner/>
      </div>
      <div className={styles.summerSale}>
      <SummerSale/>
      </div>
      <PopularItems/>
      <div>
        <Banner/>
      </div>
      <div className={styles.footer}>
      <Footer/>
      </div>
    </React.Fragment>
  );
}
