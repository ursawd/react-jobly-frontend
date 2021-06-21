import React from "react";
import "./SignupForm.css";

const Signup = () => {
  return (
    <div className="SignupForm">
      <div>
        <h3>Signup</h3>
        <form className="SignupForm-form font-weight-bold">
          <div className="form-group">
            <label for="username">Username</label>
            <input type="text" className="form-control" id="username" />

            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>

            <div className="form-group">
              <label for="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
