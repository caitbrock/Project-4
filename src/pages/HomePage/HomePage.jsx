import React from "react";
import Feed from "../../components/Feed/Feed";
import Nav from "../../components/Nav/Nav";
import YourBoards from "../../components/YourBoards/YourBoards";
import CreatePost from "../../components/CreatePost/CreatePost.jsx";
import Inspo from "../../components/Inspo/Inspo";
import Socket from "../../components/Socket/Socket";
import SubNav from "../../components/SubNav/SubNav";
import Profile from '../../components/Profile/Profile';
import "./HomePage.css";


class HomePage extends React.Component {
  state = {
    showLogin: true,
    currentTab: 1,
    show: 1,
  };

  updateCurrentTabTo = (tab) => {
    this.setState({ currentTab: tab });
  };

  render() {
    const travelComp = this.state.currentTab;
    let button;
    
    if (travelComp == 1) {
      button = (
        <Feed
          user={this.props.user}
          setUserInState={this.props.setUserInState}
        />
      );
    } else if (this.state.currentTab == 2) {
      button = <Inspo user={this.props.user}
      setUserInState={this.props.setUserInState}/>;
    } else if (this.state.currentTab == 3) {
      button = <CreatePost user={this.props.user}/>;
    } else if (this.state.currentTab == 4) {
      button = <Socket user={this.props.user}/>;
    } else {button = <Profile user={this.props.user}/>;}
    return (
      <div className="component">
        <Nav showLogin={this.state.showLogin} user={this.props.user} setUserInState={this.props.setUserInState} updateCurrentTabTo={this.updateCurrentTabTo}/>
        <SubNav updateCurrentTabTo={this.updateCurrentTabTo} />
        {button}
        
      </div>
    );
  }
}

export default HomePage;
