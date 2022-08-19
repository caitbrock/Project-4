import React from "react";
import "./PageTitle.css";

function PageTitle(props) {
  return (
    <>
      <div className="pagetitle">{props.title}</div>
      {/* <div className='pagetitle' onClick={() => {updateCurrentTabTo(1)}}>Inspo Feed</div>
    <div className='pagetitle' onClick={() => {updateCurrentTabTo(2)}}>Boards</div>
    <div className='pagetitle' onClick={() => {updateCurrentTabTo(3)}}>Upload Image</div>
    <div className='pagetitle' onClick={() => {updateCurrentTabTo(4)}}>Chat</div> */}
    </>
  );
}
export default PageTitle;
