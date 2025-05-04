import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;