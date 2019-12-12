import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AuthContext from "./AuthContext";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import Register from "./pages/RegisterPage";

const initialAuthContextState = {
  currentUser: {
    username: "JD",
    password: "supersecretpassword"
  },
  users: [
    {
      username: "JD",
      password: "supersecretpassword"
    }
  ],
  resetPassword(username, newPassword) {
    const exists = this.users.find(user => {
      if (user.username === username) {
        return true;
      }
    });

    if (exists) {
      exists.password = newPassword;
    } else {
      // user not found.
    }
  },
  login(username, password) {
    const exists = this.users.find(user => {
      if (user.username === username && user.password === password) {
        return true;
      }
    });

    if (exists) {
      this.currentUser = exists;
    } else {
      // show an invalid username/password error
    }
  },
  logout() {
    this.currentUser = null;
  },
  error: null
};

const routing = (
  <AuthContext.Provider value={initialAuthContextState}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
    </Router>
  </AuthContext.Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
