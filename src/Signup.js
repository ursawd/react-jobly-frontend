import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignupForm.css";

const Signup = ({ signup }) => {
  const INIT_FORM_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(INIT_FORM_STATE);
  const history = useHistory();

  //----------------------------------------------------
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  //----------------------------------------------------
  async function handleSubmit(evt) {
    evt.preventDefault();
    await signup(formData);
    setFormData(INIT_FORM_STATE);
    history.push("/companies");
  }

  return (
    <div className="SignupForm">
      <div>
        <h3>Signup</h3>
        <form
          className="SignupForm-form font-weight-bold"
          onSubmit={handleSubmit}
        >
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
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
