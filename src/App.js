import React from 'react';
import Header from './components/Header'
import './App.scss';
import Filter from './components/Filter';
import Listings from './components/Listings';

function App() {
  return (<div>
    <Header />
    <section id='content-area'>
      <Filter />
      <Listings />
    </section>
  </div>
   
  );
}

export default App;
