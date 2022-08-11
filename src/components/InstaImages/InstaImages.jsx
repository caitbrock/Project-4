import React from 'react'
import SavedInsta from './SavedInsta/SavedInsta'
import ViewMore from '../../ViewMore/ViewMore'

function InstaImages() {
  return (
    <div className='pageimages'>
    <div className='insta'>
        <SavedInsta />
        <SavedInsta />
        <SavedInsta />
        </div>
        <ViewMore />
        </div>
  )
}

export default InstaImages