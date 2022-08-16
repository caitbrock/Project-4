import React, {Component} from 'react'
import logo from '../../Logo-color.png'
import "./Logo.css";

class Logo extends Component {
  render () {
  return (
  <>
      <img className="logo-nav" src={logo}/>
      </>
  )
}}

export default Logo