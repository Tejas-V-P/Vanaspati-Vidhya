import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <span className="logo-icon">🌿</span>
          <span className="logo-text">Vanaspati Vidya</span>
        </NavLink>
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu" 
          aria-expanded={isOpen}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`} role="navigation" aria-label="Main navigation">
          <li><NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/explore" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>Explore Plants</NavLink></li>
          <li><NavLink to="/alchemy" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>Alchemy ✨</NavLink></li>
          <li><NavLink to="/quiz" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>Quiz</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
