import React from 'react';
import Feed from '../../components/Feed/Feed';
import Nav from '../../components/Nav/Nav';
import './HomePage.css';

class HomePage extends React.Component {
  state = { 
    showLogin: true,
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
        <Nav showLogin={this.state.showLogin} user={this.props.user} setUserInState={this.props.setUserInState}/>
        <Feed user={this.props.user} setUserInState={this.props.setUserInState}/>
      </main>
    );
  }
}

export default HomePage