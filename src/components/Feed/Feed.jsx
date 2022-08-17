import React from "react";
import header from "../../Header-IM.jpg";
import PageTitle from "../../components/PageTitle/PageTitle";
import SubNav from "../../components/SubNav/SubNav";
import ImageButton from "../ImageButton/ImageButton";
import Images from "../Images/Images";
import DeletableChips from "../DeletableChips/DeletableChips";

class Feed extends React.Component {
  state = {
    user: null,
    currentTab: 1,
  };

  render() {
    return (
      <div className="Feed">
        <div className="header" style={{ backgroundImage: `url(${header})` }}>
          <PageTitle />
        </div>
        <DeletableChips user={this.props.user} />
        <div className="inpsoimages">
          <Images />
          <Images />
          <Images />
        </div>
      </div>
    );
  }
}
export default Feed;
