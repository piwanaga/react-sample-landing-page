import React from 'react';

import HeroImg from './images/coinbase-hero.jpg';

const Hero = () => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
    };

    return (
        <div className='Hero'>
            <div className='Hero-content-container'>
                <div className='Hero-left'>
                    <img className='Hero-image' src={HeroImg}/>
                </div>
                <div className='Hero-right'>
                    <div className='Hero-right-text'>
                        <h1 className='Hero-right-heading'>The future of money is here.</h1>
                        <h2 className='Hero-right-subheading'>Over 73 million people and businesses trust us to buy, sell, and manage crypto</h2>
                    </div>
                    <div className='Hero-right-signup'>
                        <form className='Hero-signup-form' onSubmit={handleSubmit}>
                            <input type='text' placeholder='person@email.com' className='Hero-signup-input'/>
                            <button className='Hero-signup-button'>Sign up</button>
                        </form>
                        <h4 className='Hero-signup-offer'>Get $5 in Bitcoin for signing up*</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;