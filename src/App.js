import "./App.css";
import Routes from "./Routes";
import UserContext from "./UserContext";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import JoblyApi from "./api";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  //---------------------------------------------
  async function login({ username, password }) {
    let data = {
      username: username,
      password: password,
    };
    const token = await JoblyApi.login(data);
    JoblyApi.token = token;
    setCurrentUser(() => username);
  }
  //---------------------------------------------
  function logout() {
    setCurrentUser(null);
    JoblyApi.token = null;
  }
  //---------------------------------------------
  async function signup({ username, password, firstName, lastName, email }) {
    let data = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    const token = await JoblyApi.signup(data);
    JoblyApi.token = token;
    setCurrentUser(() => username);
  }

  //---------------------------------------------
  async function updateProfile(data) {
    await JoblyApi.updateProfile(data);
  }
  //---------------------------------------------
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={currentUser}>
          <div className="App">
            <Routes
              login={login}
              setCurrentUser={setCurrentUser}
              signup={signup}
              updateProfile={updateProfile}
              logout={logout}
            />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
