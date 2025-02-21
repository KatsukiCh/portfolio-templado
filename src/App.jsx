import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Hero from './Hero';
import About from './About';
import Home from './Home';


function App() {
  const creatorName = "Welcome to Rafael's Portfolio!";
  const creatorDescription = "Your least competent freelancing artist.";

  return (
    <Router>
      <div className="app">
        <Hero name={creatorName} description={creatorDescription} />

        <Routes>
          <Route path="/" element={<Home creatorName={creatorName} creatorDescription={creatorDescription} />} /> {/* Pass props to Home */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;