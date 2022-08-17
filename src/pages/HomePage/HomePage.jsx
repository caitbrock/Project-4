import React from "react";
import Feed from "../../components/Feed/Feed";
import Nav from "../../components/Nav/Nav";
import YourBoards from "../../components/YourBoards/YourBoards";
import CreatePost from "../../components/CreatePost/CreatePost.jsx";
import Inspo from "../../components/Inspo/Inspo";
import Socket from "../../components/Socket/Socket";
import SubNav from "../../components/SubNav/SubNav";
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

  async componentDidMount() {
    try {
      let jwt = localStorage.getItem("token");
      let fetchOrdersResponse = await fetch("/api/orders", {
        headers: { Authorization: "Bearer " + jwt },
      });
      let orders = await fetchOrdersResponse.json();
      this.setState({ orderHistory: orders });
    } catch (err) {
      console.error("ERROR:", err);
    }
  }
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
      button = <Inspo />;
    } else if (this.state.currentTab == 3) {
      button = <YourBoards />;
    } else if (this.state.currentTab == 4) {
      button = <CreatePost />;
    } else {
      button = <Socket />;
    }
    return (
      <div className="component">
        <Nav
          showLogin={this.state.showLogin}
          user={this.props.user}
          setUserInState={this.props.setUserInState}
        />
        <SubNav updateCurrentTabTo={this.updateCurrentTabTo} />
        {button}
        
      </div>
    );
  }
}

export default HomePage;
