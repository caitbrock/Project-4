import { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import landing from '../../LandingPage-SS.jpg';
import logo from '../../Logo-white.png';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    showLogin: true,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: this.state.name, email: this.state.email, password: this.state.password,
        }),
      });

    if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
    let token = await fetchResponse.json() 
    localStorage.setItem('token', token);     
    const userDoc = JSON.parse(atob(token.split('.')[1])).user;
    this.props.setUserInState(userDoc);

  } catch (err) {
    console.log('LoginForm error', err);
    this.setState({ error: 'Login Failed - Try Again' });
  }
};

  render() {
    return (
      <div>
        <Nav />
        <div className='signup' style={{ backgroundImage: `url(${landing})` }}>
        <img className="logo-white" src={logo} height='200px'/>
        <div className="form-container" onSubmit={this.handleSubmit}>
        </div>
          <form autoComplete="off" >
            <div><label>Email</label><input type="text" name="email" value={this.state.email} onChange={this.handleChange} required /></div>
            <div><label>Password</label><input type="password" name="password" value={this.state.password} onChange={this.handleChange} required /></div>
            <div><button type="submit">LOG IN</button></div>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
        
      </div>
    );
  }
}