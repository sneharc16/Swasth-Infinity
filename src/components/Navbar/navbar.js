import React, { useState } from 'react';
import './navbar.css'; 

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main>
      <nav className="main-menu">
        <h1>Swasth∞</h1>
        <img className="logo" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4cfdcb5a-0137-4457-8be1-6e7bd1f29ebb" alt="" />
        <ul>
          <li className={`nav-item ${activeIndex === 0 ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="/" onClick={() => setActiveIndex(0)}>
              <i className="fa fa-house nav-icon"></i>
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li className={`nav-item ${activeIndex === 1 ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="/swasthAI/index.html" onClick={() => setActiveIndex(1)}>
              <i className="fas fa-weight"></i>
              <span className="nav-text">Fitness</span>
            </a>
          </li>
          <li className={`nav-item ${activeIndex === 2 ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="/cards" onClick={() => setActiveIndex(2)}>
              <i className="fas fa-apple-alt"></i>
              <span className="nav-text">Dietary</span>
            </a>
          </li>
          <li className={`nav-item ${activeIndex === 3 ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="/sus" onClick={() => setActiveIndex(3)}>
              <i className="fas fa-leaf"></i>
              <span className="nav-text">Sustain</span>
            </a>
          </li>
          <li className={`nav-item ${activeIndex === 4 ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="https://arunamentalwellness.netlify.app/" onClick={() => setActiveIndex(4)}>
              <i className="fas fa-hand-holding-heart"></i>
              <span className="nav-text">Serenity</span>
            </a>
          </li>
          <li className={`nav-item ${activeIndex === 5 ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="/profile" onClick={() => setActiveIndex(5)}>
              <i className="fa fa-user nav-icon"></i>
              <span className="nav-text">Profile</span>
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Navbar;
