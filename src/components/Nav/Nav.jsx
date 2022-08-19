import React from "react";
import Profile from "../Profile/Profile";
import UserLogOut from "../UserLogOut/UserLogOut";
import Logo from "../Logo/Logo";
import LoginButton from "../LoginButton/LoginButton";
import "./Nav.css";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <div className="left">
      <div className='clickablelogo' onClick={() => {props.updateCurrentTabTo(1)}}><Logo /></div>
      </div>
      <div className="right">
        {props.user ? (
          <div className="info">
            <div className='icon' style={{backgroundColor: '#cdcf6f', height:'50px', width: '50px', borderRadius:'50%', margin:'20px'}} onClick={() => {props.updateCurrentTabTo(3)}}><AddAPhotoOutlinedIcon style={{margin: '13px'}}/></div>
            <div className='icon' style={{backgroundColor: '#a8ca52', height:'50px', width: '50px', borderRadius:'50%', marginRight:'20px'}} onClick={() => {props.updateCurrentTabTo(4)}}><ChatOutlinedIcon style={{ margin: '13px'}}/></div>
            <Profile user={props.user} setUserInState={props.setUserInState} onClick={() => {props.updateCurrentTabTo(5)}}/>
            
            <UserLogOut
              user={props.user}
              setUserInState={props.setUserInState}
            />
          </div>
        ) : (
          <div>
            <LoginButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
