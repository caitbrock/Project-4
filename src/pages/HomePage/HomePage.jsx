import React, { Component } from 'react';
import Boards from '../../components/Boards/Boards';
import Feed from '../../components/Feed/Feed';
import Inspo from '../../components/Inspo/Inspo';
import InstaImages from '../../components/InstaImages/InstaImages';
import Nav from '../../components/Nav/Nav';
import PageTitle from '../../components/PageTitle/PageTitle';
import TicTocImages from '../../components/TicTokImages/TicTokImages';
import YourBoards from '../../components/YourBoards/YourBoards';
import SubNav from '../../components/SubNav/SubNav';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  state = { 
    currentTab: 1, 
    show: 1
  };

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
      <div className="component">
        App
        <nav className="component">
            <Nav />
            <Link to='' className='button btn-sm'>Home</Link>
        </nav>
        <SubNav />
        <PageTitle />
        <Feed />
        <InstaImages />
        <TicTocImages/>
        <YourBoards />
      </div>
    );
  }
}

export default HomePage