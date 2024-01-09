import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <header id="header" className="fixed-top">
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <h1 className="logo me-auto me-lg-0">
        <Link to="/">Anchor Amrita</Link>
      </h1>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-social-links">
        <Link to="/contact" className="twitter"><i className="bi bi-twitter" /></Link>
        <Link to="/contact" className="facebook"><i className="bi bi-facebook" /></Link>
        <Link to="/contact" className="instagram"><i className="bi bi-instagram" /></Link>
        <Link to="https://www.linkedin.com/in/chongtham-amrita-52871076/" className="linkedin"><i className="bi bi-linkedin" /></Link>
      </div>
    </div>
  </header>
);

export default Navbar;
