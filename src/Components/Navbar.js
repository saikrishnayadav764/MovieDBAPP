import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      history(`/search?query=${searchQuery}`);
    }
  };

  return (
    <nav>
      <div className="nav-left">
      <Link to="/"><span>MovieDb</span></Link>
      </div>
      <div className="nav-right">
        <ul>
          <li><Link to="/">Popular</Link></li>
          <li><Link to="/top-rated">Top Rated</Link></li>
          <li><Link to="/upcoming">Upcoming</Link></li>
        </ul>
        <div>
          <input
            type="text"
            placeholder="Search movie name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
