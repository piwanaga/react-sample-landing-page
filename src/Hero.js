import React, { useState } from 'react';

import HeroImg from './images/coinbase-hero.jpg';

const Hero = () => {
    const [ numPeople, setNumPeople ] = useState(10);

    const generateNumber = () => {
        return Math.floor(Math.random() * 100);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setNumPeople(generateNumber());
    };

    return (
        <div className='Hero'>
            <div className='Hero-left'>
                <img className='Hero-image' alt='phone-screens' src={HeroImg}/>
            </div>
            <div className='Hero-right'>
                <div className='Hero-right-text'>
                    <a herf='#' className='signup-link'>Jump start your portfolio</a>
                    <p className='heading'>Jump start your crypto portfolio</p>
                    <p className='subheading'>Over {numPeople} million people and businesses trust us to buy, sell, and manage crypto.</p>
                </div>
                <form className='Hero-signup-form' onSubmit={handleSubmit}>
                    <input type='text' placeholder='person@email.com' className='Hero-signup-input'/>
                    <button className='Hero-signup-button'>Click Me</button>
                </form>
                <h4 className='Hero-signup-offer'>Get $5 in Bitcoin for signing up*</h4>
            </div>
        </div>
    );
};

export default Hero;