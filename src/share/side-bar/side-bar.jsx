import React from "react";
import { NavLink } from "react-router-dom";
import "./side-bar.css";

const SideBar = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/patients" activeClassName="active">
            Patients
          </NavLink>
        </li>
        <li>
          <NavLink to="/donators" activeClassName="active">
            Donators
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" activeClassName="active">
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/donations" activeClassName="active">
            Donations
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
