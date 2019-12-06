import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="nav-bar">
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/hobbies">Hobbies</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/aboutme">About Me</NavLink>
    </div>
  );
}

export default App;
