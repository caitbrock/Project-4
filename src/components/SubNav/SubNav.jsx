import React from "react";

function SubNav(props) {
  return (
    <div className="subnav">
      <div
        className="mainnav"
        onClick={() => {
          props.updateCurrentTabTo(1);
        }}
      >
        Feed
      </div>
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
