// This is for import file
import React from 'react';
import ProductPage from '../Products/ProductPage.js';
import Reviews from '../Reviews/Reviews.js';
import Advancer from './Advancer/Advancer';
import Header from './Header/Header';
import Support from './Support/Support';

// THis is the main home page. The contain all section and component
const Home = () => {
  return (
    <div>
      {/* This is for header */}
      <Header></Header>
      {/* This is for advancer */}
      <Advancer></Advancer>
      {/* This is for suport*/}
      <Support></Support>
      {/* This is for Product */}
      <ProductPage></ProductPage>
      {/* This is for REview */}
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
// This is is end of the code
