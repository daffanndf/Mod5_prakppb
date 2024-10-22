import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import { FaGamepad, FaBook } from 'react-icons/fa'; // Import book and game icons
import './App.css';
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import Game from './pages/Game';
import GameDetail from './pages/GameDetail';
import Login from './pages/Login';
import Book from './pages/Book'; 
import BookDetail from './pages/BookDetail'; 

function App() {
    return (
        <BrowserRouter>
            <header>
                <p id="titleGroup">Kelompok 38</p>
            </header>

            <Routes>
                <Route path="/" element={<Login />} /> {/* Default route to Login */}
                <Route path="/movie" element={<Movie />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/game" element={<Game />} /> {/* Route for Game component */}
                <Route path="/game/:id" element={<GameDetail />} /> {/* Route for game details */}
                <Route path="/book" element={<Book />} /> {/* Route for Book component */}
                <Route path="/book/:id" element={<BookDetail />} /> {/* Route for book details */}
            </Routes>

            <footer>
                <NavLink to="/movie" className="iconWrapper">
                    <HiHome className="icon" /> Movie
                </NavLink>
                <NavLink to="/game" className="iconWrapper">
                    <FaGamepad className="icon" /> Game
                </NavLink>
                <NavLink to="/book" className="iconWrapper">
                    <FaBook className="icon" /> Book 
                </NavLink>
                <NavLink to="/profile" className="iconWrapper">
                    <MdGroup className="icon" /> Profile
                </NavLink>
            </footer>
        </BrowserRouter>
    );
}

export default App;

