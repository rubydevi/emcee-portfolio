import React from 'react';
import Navbar from './components/Navbar';
import Navbar from './pages/About';
import Navbar from './pages/Portfolio';
import Navbar from './pages/Contact';
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
