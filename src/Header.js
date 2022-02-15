import React from 'react';
import PromoBanner from './PromoBanner';
import Navbar from './Navbar';

const Header = ({ toggleActive, handleToggle }) => {
    return (
        <header>
            <PromoBanner />
            <Navbar toggleActive={toggleActive} handleToggle={handleToggle}/>
        </header>
    );
};

export default Header;