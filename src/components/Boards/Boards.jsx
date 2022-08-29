import React from "react";
import "./Boards.css";

function Boards(props) {
  return (
    <>
      {props.boards.map((b) => (
        <div
          className="boardcard"
          style={{ margin: "20px", maxWidth: 425, minWidth: 425 }}
        >
          <div className="boardcontent">
            <div className="board-title">
              {" "}
              <h5>{b.title}</h5>
            </div>
            <div className="board-desription">
              {" "}
              <h6>{b.description}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Boards;
