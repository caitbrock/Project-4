import React from 'react'
import "../PopupForm/PopupForm.css"

function PopupForm(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default PopupForm