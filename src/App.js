import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Login from "./components/Login/Login";

class App extends Component {
  state = {
    user: null,
    currentTab: 1,
  };

  setUserInState = (incomingUserData) => {
    console.log(this.state.currentTab);
    this.setState({ user: incomingUserData });
  };

  updateInterest = (evt, newInterest) => {
    this.setState((state) => ({
      user: {
        ...this.state.user,
        interests: [...this.state.user.interests, newInterest],
      },
    }));
    console.log(newInterest);
  };

  updateCurrentTabTo = (tab) => {
    this.setState({ currentTab: tab });
  };

  async componentDidMount() {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    let token = localStorage.getItem("token");
    try {
      let userLogin = await fetch("/api/users/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!userLogin.ok) throw new Error("Couldn't fetch user");
      let response = await userLogin.json();

      console.log(response);
      if (token && response.verified) {
        let userDoc = JSON.parse(atob(token.split(".")[1])).user;
        this.setState({ user: userDoc });
      } else {
        localStorage.removeItem("token");
        this.setState({ user: null });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <HomePage
            user={this.state.user}
            setUserInState={this.setUserInState}
            updateInterest={this.updateInterest}
          />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <AuthPage
                  user={this.state.user}
                  setUserInState={this.setUserInState}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  user={this.state.user}
                  setUserInState={this.setUserInState}
                />
              }
            />
          </Routes>
        )}
      </div>
    );
  }
}

export default App;
