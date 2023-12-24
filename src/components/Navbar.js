import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>
      <Link to="/">My Portfolio</Link>
    </h1>
    <ul>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
