import React, { useState } from 'react';
import './Hero.css';
import './Navbar.css'
import Hero from './Hero';
import Header from './Header';

const App = () => {
  let [ toggleActive, setToggleActive ] = useState(false);
  const handleToggle = () => {
      setToggleActive(toggleActive = !toggleActive)
  }

  return (
    <div className='App'>
      <Header toggleActive={toggleActive} handleToggle={handleToggle} />
      {toggleActive ? 
      null :
      <main>
        <Hero />
      </main>
      }
    </div>
  );
};

export default App;
