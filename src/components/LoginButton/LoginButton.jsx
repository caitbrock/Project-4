import React from 'react';
import { Link } from 'react-router-dom';

function LoginButton() {
  return (
    <div>
    <Link to='/login'>
    <button className="btn-sm" 
    >Log In</button>
    </Link>
    </div>
  )
}

export default LoginButton