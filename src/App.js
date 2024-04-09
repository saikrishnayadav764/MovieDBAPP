import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from  './Pages/Home'
import TopRated from './Pages/TopRated';
import Upcoming from './Pages/Upcoming';
import MovieDetail from './Pages/MovieDetail';
import SearchResult from './Pages/SearchResult';
import "./App.css"

function App() {
  return (
    <Router>
      <div className='whole'>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/top-rated" element={<TopRated/>} />
            <Route path="/upcoming" element={<Upcoming/>} />
            <Route path="/movie/:id" element={<MovieDetail/>} />
            <Route path="/search" element={<SearchResult/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
