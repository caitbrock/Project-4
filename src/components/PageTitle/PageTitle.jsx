import React from 'react'
import "./PageTitle.css";

function PageTitle(props) {
  return (
    <>
    <div className='pagetitle'>Your inspo. {props.number}</div>
    </>
  )
}

export default PageTitle