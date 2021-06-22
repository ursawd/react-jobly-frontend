import "./App.css";
import Routes from "./Routes";
import UserContext from "./UserContext";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={loggedIn}>
          <div className="App">
            <Routes />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
