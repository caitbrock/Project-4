import React from "react";
import header from "../../Header-IM.jpg";
import PageTitle from "../../components/PageTitle/PageTitle";
import DeletableChips from "../DeletableChips/DeletableChips";
import Images from "../Images/Images";


class Feed extends React.Component {
  state = {
    user: null,
    currentTab: 2,
  };

  render() {
    return (
        <>
        <div className="header" style={{ backgroundImage: `url(${header})` }}>
        
        </div>
        <DeletableChips user={this.props.user} />
        <div className='inspoimages' style={{display: 'flex', justifyContent: 'center'}}>
        <Images />
        <Images />
        <Images />
        </div>
      </>

    );
  }
}
export default Feed;
