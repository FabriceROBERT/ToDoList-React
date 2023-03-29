import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import React from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Add Techno
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            All Technos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
