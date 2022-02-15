import React from 'react';

const Navbar = ({ toggleActive, handleToggle }) => {
    return (
        <nav className='Navbar'>
            <div className='logo'>company</div>
            <button className='signup-button mobile-sm'>Sign Up</button>
            <a href='#' className='toggle' onClick={handleToggle}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className={`nav-links ${toggleActive ? 'active' : null}`}>
                <ul>
                    <li>
                        <a href='#'>Prices</a>
                    </li>
                    <li>
                        <a href='#'>Learn</a>
                    </li>
                    <li>
                        <a href='#'>Individuals</a>
                    </li>
                    <li>
                        <a href='#'>Businesses</a>
                    </li>
                    <li>
                        <a href='#'>Developers</a>
                    </li>
                    <li>
                        <a href='#'>Company</a>
                    </li>
                </ul>
                <div className='user-links'>
                    <button className='signup-button'>Sign Up</button>
                    <button className='signin-button'>Sign In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;