import React from "react";
import './SubNav.css';

function SubNav(props) {
  return (
    <div className="subnav">
      <div
        className="mainnav"
        onClick={() => {
          props.updateCurrentTabTo(2);
        }}
      >
        Inspo
      </div>
      <div
        className="mainnav"
        onClick={() => {
          props.updateCurrentTabTo(3);
        }}
      >
        Add Pci
      </div>
      <div
        className="mainnav"
        onClick={() => {
          props.updateCurrentTabTo(4);
        }}
      >
        Add Post
      </div>
      <div
        className="mainnav"
        onClick={() => {
          props.updateCurrentTabTo(5);
        }}
      >
        Chat
      </div>
    </div>
  );
}

export default SubNav;
