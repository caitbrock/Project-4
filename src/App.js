import React, { Component } from "react";
import "./App.css";
import Boards from "./components/Boards/Boards";
import Feed from "./components/Feed/Feed";
import Inspo from "./components/Inspo/Inspo";
import InstaImages from "./components/InstaImages/InstaImages";
import Nav from "./components/Nav/Nav";
import PageTitle from "./components/PageTitle/PageTitle";
import TicTocImages from "./components/TicTokImages/TicTokImages";
import YourBoards from "./components/YourBoards/YourBoards";
import SubNav from "./components/SubNav/SubNav";

class App extends Component {
  state = { currentTab: 1 };

  updateCurrentTabTo = (tab) => {
    console.log(this.state.currentTab);
    this.setState((state) => ({ currentTab: tab }));
  };

  render() {
    const travelComp = this.state.currentTab;
    let button;
    if (travelComp == 1) {
      button = <Feed />;
    } else if (this.state.currentTab == 2) {
      button = <Inspo />;
    } else {
      button = <YourBoards />;
    }

    return (
      <div className="component">
        App
        <nav className="component">
          <Nav />
          <PageTitle />
        </nav>
        <SubNav updateCurrentTabTo={this.updateCurrentTabTo} />
        {button}
      </div>
    );
  }
}

export default App;
