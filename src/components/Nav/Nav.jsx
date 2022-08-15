import React from "react";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";
import Title from "../Title/Title";
import UserLogOut from "../UserLogOut/UserLogOut";

function Nav() {
  return (
    <div className="nav">
      <div className="left">
        <Logo />
        <Title />
      </div>
      <div className="right">
        <Profile />
        <UserLogOut />
      </div>
    </div>
  );
}

export default Nav;
