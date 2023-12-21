import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App;
