import React from 'react';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero Section';
import Products from './components/Products';
import { ProductData, ProductDataTwo } from './components/Products/Data';
import Feature from './components/Feature';
// import { Feature } from './components/Feature';

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
        {/* <Navbar></Navbar> */}
        <Hero></Hero>
        <Products heading="Our Services" data={ProductData}></Products>
        {/* <Feature></Feature> */}
        <Feature></Feature>
        <Products heading="Check Out our other services" data={ProductDataTwo}></Products>
    </Router>
  );
}

export default App;
