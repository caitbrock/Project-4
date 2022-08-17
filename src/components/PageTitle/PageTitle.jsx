import React from 'react'
import "./PageTitle.css";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function PageTitle(props) {
  return (
    <>
    <div className='pagetitle'>Your inspo. {props.number}</div>
    </>
  )
}

export default PageTitle