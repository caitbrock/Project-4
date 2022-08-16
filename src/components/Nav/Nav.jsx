import React, { Component } from "react";
import Profile from "../Profile/Profile";
import UserLogOut from "../UserLogOut/UserLogOut";
import Logo from "../Logo/Logo";
import LoginButton from '../LoginButton/LoginButton'
import "./Nav.css";

class Nav extends Component {
  state = {
    showLogin: true,
  }

  render() {
    return (
      <div className="nav">
        <div className="left">
          <Logo />
        </div>
        <div className="right">
        {this.state.showLogin ?
          <Profile setUserInState={this.props.setUserInState}/>:
          <LoginButton/> }
          <UserLogOut />
        </div>
      </div>
    );
  }
}

export default Nav