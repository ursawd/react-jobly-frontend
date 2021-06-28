import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";
//======================================================
const LoginForm = ({ login }) => {
  //----------------------------------------------------
  const INIT_STATE = {
    username: "",
    password: "",
  };
  //----------------------------------------------------
  const [formData, setFormData] = useState(INIT_STATE);
  const [error, setError] = useState(null);
  const history = useHistory();
  //----------------------------------------------------
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  //----------------------------------------------------
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      setFormData(INIT_STATE);
      history.push("/companies");
    } catch (err) {
      setError(err);
    }
  }
  //----------------------------------------------------

  return (
    <div>
      <div className="LoginForm">
        <div>
          <h3>Login</h3>
          <form className="font-weight-bold" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>

              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
              />

              <div className="form-group">
                <label htmlFor="password">Password</label>

                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              {error && (
                <div className="form-group ">
                  <input
                    className="form-control alert alert-danger"
                    value={error}
                  />
                </div>
              )}

              <button type="submit" className="btn btn-primary">
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
