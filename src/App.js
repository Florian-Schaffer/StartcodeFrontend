import React, { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import User from "./components/User";
import Admin from "./components/Admin";
import LoggedIn from "./components/LoggedIn";
import "bootstrap/dist/css/bootstrap/.min.css";
import NoMatch from "./components/NoMatch";


function App({ facade }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage("Logged out");

    };

    const login = (user, pass) => {
      facade.login(user, pass, setLoggedIn, setErrorMessage);
    };

    return (
      <div>
        <Header facade = {facade} />
        <Switch>
          <Route exact path ="/">
            <Home 
            loggedIn={loggedIn}
            errorMessage={errorMessage}
            login={login}
            logout ={logout} 
            setLoggedIn = {setLoggedIn}
            setErrorMessage = {setErrorMessage}
            />

          </Route>

          <Route exact path = "/user">
            {facade.hasUserAcces("user", LoggedIn)&& (<User userMessage={userMessage} setUserMessage={setUserMEssage} />
            )}
          </Route>

          <Route exact path="/admin">
            {facade.hasUserAcces("admin", LoggedIn)&&(
              <Admin userMessage={userMessage} setUserMessage={setUserMessage} />
            )}
          </Route>

          <Route path ="*">
            <NoMatch />

          </Route>


        </Switch>
      </div>
    );  
}

export default App;