import logo from './logo.svg';
import './App.css';
import React from 'react';
import Appbar from './Components/Appbar';
import Footer from './Components/Footer';
import PopularItems from './Components/PopularItems';
import CarouselBanner from './Components/CarouselBanner';
import SummerSale from './Components/SummerSale';
import Banner from './Components/Banner';

function App() {
  return (
    <React.Fragment>
      <div className='appbar'>
      <Appbar/>
      </div>
      <div className='carousel'>
      <CarouselBanner/>
      </div>
      <div className='summerSale'>
      <SummerSale/>
      </div>
      <PopularItems/>
      <div>
        <Banner/>
      </div>
      <div className='footer'>
      <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
