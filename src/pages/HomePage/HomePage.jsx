import React from 'react';
import Boards from '../../components/Boards/Boards';
import Feed from '../../components/Feed/Feed';
import Inspo from '../../components/Inspo/Inspo';
import InstaImages from '../../components/InstaImages/InstaImages';
import Nav from '../../components/Nav/Nav';
import PageTitle from '../../components/PageTitle/PageTitle';
import TicTocImages from '../../components/TicTokImages/TicTokImages';
import YourBoards from '../../components/YourBoards/YourBoards';
import SubNav from '../../components/SubNav/SubNav';
import './HomePage.css';

class HomePage extends React.Component {
  state = { 
    currentTab: 1, 
    show: 1
  };

  updateCurrentTabTo = (tab) => {
    this.setState((state) => ({ currentTab: tab }));
  };

  render() {
    return (
      <div className="component">
        <nav className="nav">
            <Nav />
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