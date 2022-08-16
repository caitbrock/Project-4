import { Component } from 'react';
import landing from '../../LandingPage-SS.jpg';
import decorative from '../../Decorative-01.png';
import './SignUpForm.css';
import logo from '../../Logo-white.png';
import ExpandCircleDownSharp from '@mui/icons-material/ExpandCircleDownSharp';
import Checkbox from '@mui/material/Checkbox';
import LocalAirportOutlinedIcon from '@mui/icons-material/LocalAirportOutlined';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
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
      const fetchResponse = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: this.state.name, email: this.state.email, password: this.state.password,
        }),
      });

    if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request');
    let token = await fetchResponse.json(); 
    console.log(token)    
    localStorage.setItem('token', token);     
    const userDoc = JSON.parse(atob(token.split('.')[1])).user;
    this.props.setUserInState(userDoc);

  } catch (err) {
    console.log('SignupForm error', err);
    this.setState({ error: 'Sign Up Failed - Try Again' });
  }
};

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
    <>
      <div className='signup' style={{ backgroundImage: `url(${landing})` }}>
      <img className="logo-white" src={logo} height='200px'/>
        <div className='boxes'>
          <div className='box'>
            <div className='Number'>1</div>
            <div className='State'><h4>Create Your Profile</h4></div>
            <div className='Instructions'><p>Create a profile using your email</p></div>
          </div>
          <div className='box'>
            <div className='Number'>2</div>
            <div className='State'><h4>Choose Your Inspo</h4></div>
            <div className='Instructions'><p>Select cities/countries/activies you are interested in.</p></div>
          </div>
          <div className='box'>
            <div className='Number'>3</div>
            <div className='State'><h4>Start Your Planning</h4></div>
            <div className='Instructions'><p>Click Submit and off you Go!</p></div>
          </div>
        </div>
      </div>

      <div className="form-container" style={{ backgroundImage: `url(${decorative})` }}>
        <div className='letsgetstarted'>
          <div className='letsgetstarted-text'><h3>Let's get started!</h3></div>
          <ExpandCircleDownSharp className='letsgetstarted-text'></ExpandCircleDownSharp>
        </div>

        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className='step-instructions'> <h2>1. Create an account using email.</h2></div>
          <div className='1'>
            <div className='label'><label>Name</label><input type="text" name="name" value={this.state.name} onChange={this.handleChange} required /></div>
            <div className='label'><label>Email</label><input type="email" name="email" value={this.state.email} onChange={this.handleChange} required /></div>
            <div className='label'><label>Password</label><input type="password" name="password" value={this.state.password} onChange={this.handleChange} required /></div>
            <div className='label'><label>Confirm</label><input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required /></div>
          </div>

          <div className='2'>
            <div className='step-instructions'> <h2>2. Select your travel interests?</h2></div>
            <div className='traveltags'>
              <div>North America <Checkbox {...label} color="default" /></div>
              <div> South America <Checkbox {...label} color="default" /></div>
              <div> Asia <Checkbox {...label} color="default" /></div>
              <div> Africa <Checkbox {...label} color="default" /></div>
              <div> Europe <Checkbox {...label} color="default" /></div>
              <div> Austraillia <Checkbox {...label} color="default" /></div>
              <div> Antarctica <Checkbox {...label} color="default" /></div>
            </div>
          </div>

          <div className='3'>
            <div className='step-instructions'> <h2>3. Get inspired and start planning your trip.</h2></div>
            <button className='submit'disabled={disable}>
                <span>
                  <LocalAirportOutlinedIcon />
                </span>
            </button>
          </div>
        </form>
      <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    </>
    )}};
