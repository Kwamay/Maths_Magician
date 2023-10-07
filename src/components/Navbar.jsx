import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="navbar">
    <h1 className="page-header">Math Magicians</h1>
    <ul>
      <li>
        <Link className="links" to="/">Home</Link>
      </li>
      <li>
        <Link className="links" to="calculator">Calculator</Link>
      </li>
      <li>
        <Link className="links" to="quotes">Quotes</Link>
      </li>
    </ul>
  </header>
);

export default Navbar;
