import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";
import "./SignupForm.css";
import JoblyApi from "./api";

const Profile = () => {
  const INIT_FORM_STATE = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  //-------------------------------------
  const currentUser = useContext(UserContext);
  const [formData, setFormData] = useState(INIT_FORM_STATE);
  // const [profile, setProfile] = useState(null);
  const history = useHistory();

  //----------------------------------------------------
  //if false no user signed in, redirect to home
  if (!currentUser) {
    history.push("/home");
  }
  //----------------------------------------------------
  useEffect(
    function getProfileData() {
      async function getProfile() {
        let pD = await JoblyApi.getUserInfo(currentUser);
        // setProfile(pD);
        setFormData((formData) => ({
          ...formData,
          username: pD.username,
          firstName: pD.firstName,
          lastName: pD.lastName,
          email: pD.email,
        }));
      }
      getProfile();
    },
    [currentUser]
  );

  //----------------------------------------------------
  // form processing of each field
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  //----------------------------------------------------
  // processinig submission of form
  async function handleSubmit(evt) {
    evt.preventDefault();
    //! due to copy form signup form
    //! need processing function to be written
    //! to update user in db
    // await signup(formData);
    setFormData(INIT_FORM_STATE);
    history.push("/companies");
  }

  return (
    <div className="SignupForm">
      <div>
        <h3>Update Profile</h3>
        <form
          className="SignupForm-form font-weight-bold"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <p className="font-weight-normal">{formData.username}</p>
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
          <div className="form-group">
            <label htmlFor="password">Confirm password to save changes</label>
            <input
              id="password"
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

//-------------------------------------
export default Profile;
