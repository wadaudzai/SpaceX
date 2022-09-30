import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';
import image from '../assets/images/planet.png';

export default function Navbar() {
  return (
    <nav>
      <div className="logo-holder">
        <img src={image} alt="planet" className="logo" />
        <h2>Space Travelers Hub</h2>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/Rockets"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/Mission"
          >
            Mission
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/MyProfile"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
