import React from 'react'
import "./PageTitle.css";



function PageTitle(props){

  return (
    <>
     <div className='pagetitle'>{props.title}</div>
    </>
  )
}
export default PageTitle