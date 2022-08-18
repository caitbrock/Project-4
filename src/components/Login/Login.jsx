import { Component } from 'react';
import Nav from '../Nav/Nav';
import landing from '../../LandingPage-SS.jpg';
import logo from '../../Logo-white.png';
import './Login.css';


export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.state.email, password: this.state.password, })
      })


      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      let token = await fetchResponse.json() 
      localStorage.setItem('token', token);  

      const userDoc = JSON.parse(atob(token.split('.')[1])).user;
      this.props.setUserInState(userDoc)

    } catch (err) {
      console.log("SignupForm error", err)
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className='login' style={{ backgroundImage: `url(${landing})` }}>
        <img className="logo-white-login" src={logo} height='200px'/>
        <div className='welcome'> <h1>Welcome Back Traveller!</h1></div>
        </div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className='one'>
            <div className='label'><label>Email</label><input type="text" name="email" value={this.state.email} onChange={this.handleChange} required /></div>
            <div className='label'><label>Password</label><input type="password" name="password" value={this.state.password} onChange={this.handleChange} required /></div>
            </div>
            <button className='submitlgoin'>
                <span>
                  Login
                </span>
            </button>
            </form>
            <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      </div>
    );
  }
}
