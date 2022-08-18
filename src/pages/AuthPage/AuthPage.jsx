import React from 'react'
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Nav from '../../components/Nav/Nav';

export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  }

  render() {
    return (
        <>
        <Nav showLogin={this.state.showLogin} user={this.props.user} />
        <SignUpForm setUserInState={this.props.setUserInState} />
      </>
    );
  }
}