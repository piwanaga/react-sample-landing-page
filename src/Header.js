import React from 'react';
import PromoBanner from './PromoBanner';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <PromoBanner />
            <Navbar />
        </header>
    );
};

export default Header;