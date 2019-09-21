import React, { Component } from 'react';
import "./Navbar.css";

// import AuthContext from '../contexts/AuthContext';
// import AuthDropdown from '../components/AuthDropdown';


class Navbar extends Component {
    render() {
        return (
            <div className='Navigation'>
                <nav className="navbar">
                    <span className="navbar-brand mb-0 h1">Marvel-Search</span>
                </nav>
            </div>
        );
    }
}

export default Navbar;