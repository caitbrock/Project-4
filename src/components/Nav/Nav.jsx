import React, { Component } from "react";
import Profile from "../Profile/Profile";
import UserLogOut from "../UserLogOut/UserLogOut";
import Logo from "../Logo/Logo";
import LoginButton from '../LoginButton/LoginButton'
import { Route, Routes } from "react-router-dom";
import "./Nav.css";

function Nav(props) {

    return (
      <div className="nav">
        <div className="left">
          <Logo />
        </div>
        <div className="right">
        {props.showLogin ? 
        <Profile showLogin={props.showLogin}/> :
        <LoginButton showLogin={props.showLogin}/>
        }
          <UserLogOut user={props.user} setUserInState={props.setUserInState}/>
        </div>
      </div>
    );
        }

export default Nav