import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Jobly
      </NavLink>
      <div className="NavBar-links">
        <NavLink exact to="/login">
          Login
        </NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </nav>
  );
}
export default NavBar;
