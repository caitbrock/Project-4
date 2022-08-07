import React from 'react'


function SubNav() {
  return (
    <div className='subnav'>
       <div className='mainnav' onClick={() => {this.updateCurrentTabTo(1); this.boardTab()}}>Feed</div> 
       <div className='mainnav' onClick={() => {this.updateCurrentTabTo(2); this.boardTab()}}>Inspo</div> 
       <div className='mainnav' onClick={() => {this.updateCurrentTabTo(3); this.boardTab()}}>Boards</div> 
    </div>
  )
}

export default SubNav