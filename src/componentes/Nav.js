import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(searchTerm);
    };

  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/section">Section</Link>
        </li>
        <li>
          <Link to="/enterprise">Enterprise</Link>
        </li>
      </ul>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </nav>
  );
};

export default Nav;