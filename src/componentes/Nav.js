// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import Compra from '../pages/Compra';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
