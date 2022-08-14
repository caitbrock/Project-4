import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import Title from '../Title/Title';
import UserLogOut from '../UserLogOut/UserLogOut';
import Logo from '../Logo/Logo';


class Nav extends Component {
  render() {
    return (
      <div className='nav'>
      <div className='left'>
          <Logo />
          <Title />
       </div>
      <div className='right'>
          <Profile />
          <UserLogOut />
      </div>
  </div>

)
}}



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

export default Nav