import React from "react";
import header from "../../Header-IM.jpg";
import Images from "../Images/Images";

function Inspo() {
  return (
    <>
      <div
        className="bannerheader"
        style={{ backgroundImage: `url(${header})` }}
      ></div>
      <div
        className="boardcollections"
        style={{ display: "flex", justifyContent: "center" }}>
        <div></div> 
        <div> </div>
        <div> </div>
      </div>
    </>
  );
}

export default Inspo;
