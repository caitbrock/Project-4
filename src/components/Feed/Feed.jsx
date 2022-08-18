import React from "react";
import header  from "../../Header-IM.jpg";
import DeletableChips from "../DeletableChips/DeletableChips";
import Images from "../Images/Images";


class Feed extends React.Component {
  setstate = {
    currentTab: 1,
  };

  render() {
    return (
        <>
        <div className="header " style={{ backgroundImage: `url(${header})` }}></div>
        <DeletableChips user={this.props.user} updateInterest={this.props.updateInterest}/>
        <div className='FeedImages' style={{display: 'flex', justifyContent: 'center'}}>
        <Images />
        <Images />
        <Images />
        </div>
      </>
    );
  }
}
export default Feed;
