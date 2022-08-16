import React from 'react';
import Boards from '../../components/Boards/Boards';
import Feed from '../../components/Feed/Feed';
import Inspo from '../../components/Inspo/Inspo';
import InstaImages from '../../components/InstaImages/InstaImages';
import Nav from '../../components/Nav/Nav';
import PageTitle from '../../components/PageTitle/PageTitle';
import TicTocImages from '../../components/TicTokImages/TicTokImages';
import YourBoards from '../../components/YourBoards/YourBoards';
import SubNav from '../../components/SubNav/SubNav'
import './HomePage.css';

class HomePage extends React.Component {
  state = { 
    currentTab: 1, 
    show: 1
  };

  async componentDidMount() {
    try {
      let jwt = localStorage.getItem('token')
      let fetchOrdersResponse = await fetch('/api/orders', {headers: {'Authorization': 'Bearer ' + jwt}})
      let orders = await fetchOrdersResponse.json(); 
      this.setState({ orderHistory: orders})
    } catch (err) {
      console.error('ERROR:', err)
    }
  }
  render() {
    return (
      <main className="component">
        <Nav user={this.props.user} setUserInState={this.props.setUserInState}/>
        <SubNav />
        <PageTitle />
        <Feed />
        <InstaImages />
        <TicTocImages/>
        <YourBoards />
      </main>
    );
  }
}

export default HomePage