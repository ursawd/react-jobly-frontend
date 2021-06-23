import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import "./Home.css";

const Home = () => {
  const currentUser = useContext(UserContext);

  return (
    <div id="Home">
      <div>
        <h1>Jobly</h1>
        <p>All the jobs in one, convienent place.</p>

        {currentUser ? (
          <div>
            <h1>Welcome Back</h1>
          </div>
        ) : (
          <div>
            <Link to="/login" className="btn btn-primary m-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary m-2">
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
