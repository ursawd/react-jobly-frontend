import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";
import "./NavBar.css";
function NavBar({ logout }) {
  const currentUser = useContext(UserContext);
  const jsxLogin = (
    <div className="NavBar-links">
      <NavLink exact to="/login">
        Login
      </NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  );
  const jsxLogout = (
    <div className="NavBar-links">
      <NavLink exact to="/companies">
        Companies
      </NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/" onClick={logout} style={{ color: "#007BFF" }}>
        Log Out {currentUser ? currentUser.username : ""}
      </NavLink>
    </div>
  );

  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Jobly
      </NavLink>
      {currentUser ? jsxLogout : jsxLogin}
    </nav>
  );
}
export default NavBar;
