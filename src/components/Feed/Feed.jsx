import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import header from '../../Header-IM.jpg';
import PageTitle from '../../components/PageTitle/PageTitle';
import SubNav from '../../components/SubNav/SubNav'
import ImageButton from "../ImageButton/ImageButton";
import Images from "../Images/Images";
import DeletableChips from "../DeletableChips/DeletableChips";
import Component from 'react';
import "./Feed.css";


class Feed extends React.Component {

  render(){
  return (
    <div className='Feed'>
      <div className='header' style={{ backgroundImage: `url(${header})` }}>
        <SubNav />
        <PageTitle />
        <ImageButton />
    </div>
    <DeletableChips user={this.props.user}/>
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






