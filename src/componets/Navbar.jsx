import React from 'react';
import '../styles/Navbar.css';

// Navbar component: Renders a navigation bar with links to different parts of the app
const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Unordered list for navigation links */}
            <ul className="navbar-list">
                {/* List item for each navigation link */}
                <li className="navbar-item"><a href="/">Home</a></li>
                <li className="navbar-item"><a href="/shows">Shows</a></li>
                <li className="navbar-item"><a href="/favourites">Favourites</a></li>
            </ul>
        </nav>
    );
};

// Export the Navbar component for use in other parts of the app
export default Navbar;