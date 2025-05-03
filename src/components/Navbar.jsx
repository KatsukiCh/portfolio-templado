import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Rafael's very very nice portfolio</h1>
        <div className="nav-links">
          <a href="#projects">Teleport to my Projects!</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;