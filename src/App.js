import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Boards from './components/Boards/Boards';
import Feed from './components/Feed/Feed';
import Inspo from './components/Inspo/Inspo';
import Nav from './components/Nav/Nav';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  state = { 
    user: null,
    currentTab: 1, 
  };

  setUserInState = (incomingUserData) => {
    this.setState({user: incomingUserData });
  };
  
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      let userDoc = JSON.parse(atob(token.split('.')[1])).user
      this.setState({user: userDoc})      
    }
  }

  updateCurrentTabTo = (tab) => {
    this.setState((state) => ({ currentTab: tab }));
  };

  boardTab = () => {
    if (this.state.currentTab==1) {
      return (<Feed />)}
    else if(this.state.currentTab==2){
      return (<Inspo />)}
    else if (this.state.currentTab==3)
      return (<Boards />)};

  render() {
    return (
      <main className="App">

        { this.state.user ? 
          <Switch>
            <Route path='/home' render={(props) => (
              <HomePage {...props}/>
            )}/>
            <Redirect to="/home/login" />
          </Switch>
          :
          <AuthPage setUserInState={this.setUserInState}/>
        }
      </main>

    );
  }
}

export default App;