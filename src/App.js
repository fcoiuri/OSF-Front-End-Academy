import logo from './logo.svg';
import React from 'react';
import Appbar from './Components/Appbar';
import Footer from './Components/Footer';

import './App.css';
import ProductTile from './Components/ProductTile/ProductTile';

function App() {
  return (
    <React.Fragment>
      <div className='appbar'>
      <Appbar/>
      </div>
      <ProductTile/>
      <div className='footer'>
      <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
