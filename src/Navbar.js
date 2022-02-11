import React from 'react';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='Navbar-content-container'>
                <div className='Navbar-logo'>
                    <h1>company</h1>
                </div>
                <div className='Navbar-main-nav'>
                    <ul className='Navbar-main-nav-links'>
                        <li className='Navbar-nav-item'>Prices</li>
                        <li className='Navbar-nav-item'>Learn</li>
                        <li className='Navbar-nav-item'>Individuals</li>
                        <li className='Navbar-nav-item'>Businesses</li>
                        <li className='Navbar-nav-item'>Developers</li>
                        <li className='Navbar-nav-item'>Company</li>
                    </ul>
                </div>
                <div className='Navbar-user-links'>
                    <button className='Navbar-signin-button'>Sign In</button>
                    <button className='Navbar-signup-button'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;