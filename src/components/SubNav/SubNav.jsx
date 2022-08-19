import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import "./SubNav.css";

function SubNav(props) {
  
  return (
    <>
      <div className="subnav">
        <div
          className="mainnav"
          tabIndex="1"

          onClick={() => {
            props.updateCurrentTabTo(1, "Feed"); 
          }}
        >
          Inspo Feed
        </div>
        <div
          className="mainnav"
          tabIndex="2"
          onClick={() => {
            props.updateCurrentTabTo(2, "Boards");
          }}
        >
          Boards
        </div>
      </div>
      <PageTitle />
    </>
  );
}

export default SubNav;
