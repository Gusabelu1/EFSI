import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Card';
import Banner from './Banner';
import './App.css';

function App() {
  console.log(Navbar)
  return (
    <>
    <Navbar />
    <Banner></Banner>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Cards />
        </div>
        <div className="col-md-6">
          <Cards />
        </div>
        <div className="col-md-3">
          <Cards />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-3">
          <Cards />
        </div>
        <div className="col-md-6">
          <Cards/>
        </div>
        <div className="col-md-3">
          <Cards />
        </div>
      </div>
    </div>
    <Footer /> 
      
    </>
  );
}

export default App;
