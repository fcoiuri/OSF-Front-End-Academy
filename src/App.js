import logo from './logo.svg';
import React from 'react';
import Appbar from './Components/Appbar';
import Footer from './Components/Footer';
import PopularItems from './Components/PopularItems';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='appbar'>
      <Appbar/>
      </div>
      <PopularItems/>
      <div className='footer'>
      <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
