import React from 'react'
import SavedTicTok from '../SavedTicTok/SavedTicTok'
import ViewMore from '../ViewMore/ViewMore'

function TicTokImages() {
  return (
    <div className='pageimages'>
    <div className='tictok'>
        <SavedTicTok />
        <SavedTicTok  />
        <SavedTicTok  />
        </div>
        <ViewMore />
        </div>
  )
}

export default TicTokImages