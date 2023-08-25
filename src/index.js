import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Cta from './components/Cta';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Main />
    <Cta />
    <Footer />
  </React.StrictMode>
);
