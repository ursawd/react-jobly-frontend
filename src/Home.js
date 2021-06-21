import React from "react";
import { Button } from "reactstrap";
import "./Home.css";

const Home = () => {
  return (
    <div id="Home">
      <div>
        <h1>Jobly</h1>
        <p>All the jobs in one, convienent place.</p>
        <Button href="/login" className="m-2" color="primary">
          Login
        </Button>
        <Button href="/signup" className="m-2" color="primary">
          Signup
        </Button>
      </div>
    </div>
  );
};
export default Home;
