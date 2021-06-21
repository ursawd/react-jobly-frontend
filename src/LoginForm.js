import React from "react";
import "./LoginForm.css";
const LoginForm = (props) => {
  return (
    <div>
      <div className="LoginForm">
        <div>
          <h3>Login</h3>
          <form className="font-weight-bold">
            <div className="form-group">
              <label for="username">Username</label>
              <input type="text" className="form-control" id="username" />
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
