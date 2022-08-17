import React from 'react'
import "./ImageButton.css";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function ImageButton() {
  return (
    <>
    <button className='image'>Add an image
                <span>
                  <AddPhotoAlternateIcon />
                </span>
            </button>
    </>
  )
}

export default ImageButton