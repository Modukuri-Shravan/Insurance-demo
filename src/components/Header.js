import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling the header

const Header = () => {
    return (
        <header className="header">
            <h1>Insurance Claim Management System</h1>
            <nav>
                <ul>
                    <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
                    <li><Link to="/customer/dashboard">Customer Dashboard</Link></li>
                    <li><Link to="/surveyor/dashboard">Surveyor Dashboard</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;