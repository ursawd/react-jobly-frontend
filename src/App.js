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
    console.log("LOGIN", username, password);
    let data = {
      username: username,
      password: password,
    };
    const token = await JoblyApi.login(data);
    JoblyApi.token = token;
    console.log(token);
    setCurrentUser(username);
  }
  //---------------------------------------------
  function logout() {
    setCurrentUser(null);
    JoblyApi.token = null;
  }
  //---------------------------------------------
  async function signup({ username, password, firstName, lastName, email }) {
    console.log("SIGNUP", username, password, firstName, lastName, email);
    let data = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    const token = await JoblyApi.signup(data);
    JoblyApi.token = token;
    setCurrentUser(username);
  }

  //---------------------------------------------
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={currentUser}>
          <div className="App">
            <Routes login={login} logout={logout} signup={signup} />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
