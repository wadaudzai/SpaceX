import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <h2>Space Travelers Hub</h2>
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
