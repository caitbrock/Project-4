import React, { Component } from "react";
import Profile from "../Profile/Profile";
import UserLogOut from "../UserLogOut/UserLogOut";
import Logo from "../Logo/Logo";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="left">
          <Logo />
        </div>
        <div className="right">
          <Profile />
          <UserLogOut />
        </div>
      </div>
    );
  }
}

//     <div className='nav'>
//         <div className='left'>
//             <Logo />
//             <Title />
//          </div>

//         <div className='right'>
//           {this.state.showLogin ?
//           <Button>Login</Button> :
//           <Profile/>
// }
//             <UserLogOut />
//         </div>
//     </div>

//   )
// }}

// {this.state.showLogin ?
//   <LoginForm setUserInState={this.props.setUserInState}/> :
//   <SignUpForm setUserInState={this.props.setUserInState} />}

export default Nav;
