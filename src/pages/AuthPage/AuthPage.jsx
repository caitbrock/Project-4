import React from 'react'
import './AuthPage.css';
import Logo from '../../components/Logo/Logo';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Nav from '../../components/Nav/Nav';

export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  }

  render() {
    return (
        <>
        <nav className="nav">
            <Nav />
        </nav>
        <div>
          <h3 onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
            {this.state.showLogin ? 'SIGN UP' : 'LOG IN'}
          </h3>
        </div>

        {this.state.showLogin ? 
        <LoginForm setUserInState={this.props.setUserInState}/> : 
        <SignUpForm setUserInState={this.props.setUserInState} />}
      </>
    );
  }
}