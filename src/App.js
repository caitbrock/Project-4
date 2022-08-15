import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";

class App extends Component {
  state = {
    user: null,
    currentTab: 1,
  };

  setUserInState = (incomingUserData) => {
    console.log(this.state.currentTab);
    this.setState({ user: incomingUserData });
  };

  async componentDidMount() {
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
    const travelComp = this.state.currentTab;
    let button;
    if (travelComp == 1) {
      button = <Feed />;
    } else if (this.state.currentTab == 2) {
      button = <Inspo />;
    } else {
      button = <YourBoards />;
    }

    return (
      <>
        <div className="App">
          <Routes>
            {this.state.user ? (
              <Route
                path="/home"
                element={
                  <HomePage
                    user={this.state.user}
                    setUserInState={this.setUserInState}
                  />
                }
              />
            ) : (
              <Route
                path="/login"
                element={<AuthPage setUserInState={this.setUserInState} />}
              />
            )}
            ;
          </Routes>
        </div>
        <div className="component">
          App
          <nav className="component">
            <Nav />
            <PageTitle />
          </nav>
          <SubNav updateCurrentTabTo={this.updateCurrentTabTo} />
          {button}
        </div>
      </>
    );
  }
}

export default App;
