import React from "react";
import header  from "../../Header-IM.jpg";
import Images from "../Images/Images";


function Inspo() {
  return (
    <>
        <div className="header " style={{ backgroundImage: `url(${header})`}}></div>
        <div className='boardcollections' style={{display: 'flex', justifyContent: 'center'}}>
        <Images />
        <Images />
        <Images />
        </div>
    </>
  );
}

export default Inspo;
