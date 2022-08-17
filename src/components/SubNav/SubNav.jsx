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
        Boards
      </div>
    </div>
  );
}

export default SubNav;
