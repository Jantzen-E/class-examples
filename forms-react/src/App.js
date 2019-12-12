import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default App;
