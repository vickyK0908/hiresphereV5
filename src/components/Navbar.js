import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-dot">●</span> HireSphere
      </div>

      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/browse"
            className={location.pathname === '/browse' ? 'nav-link active' : 'nav-link'}
          >
            Browse Jobs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
