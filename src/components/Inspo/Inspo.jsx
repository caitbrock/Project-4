import React from "react";
import header from "../../Header-IM.jpg";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import PopupForm from "../PopupForm/PopupForm";
import { useState } from 'react';
import "./Inspo.css";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#FB9A34",
    },
    secondary: {
      main: "#21302D",
    },
    info: { main: "#FE7942" },
  },
});


function Inspo(props) {

  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <>
     <div
        className="bannerheader"
        style={{ backgroundImage: `url(${header})` }}
      ></div>
    <ThemeProvider theme={customTheme}>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 3,
          m: 2,
        }}
        component="ul"
      >
        <form
          className="interestform"
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Search Boards"
          />
          <button className="submitsearch">
            <SearchIcon />
          </button>
        </form>

<button className="create-board" onClick={() => setButtonPopup(true)}> Create Board <span><AddIcon/></span></button>
        <PopupForm trigger={buttonPopup} setTrigger= {setButtonPopup}>
        <form className="createboard"
              // action="/"
              // enctype="multipart/form-data"
              // method="post"
              // onSubmit={this.handlePost}
            >
      
              <label className="addboardlabel">
                Title:
                <input
                  type="text"
                  name="title"
                  // value={this.state.title}
                  // onChange={this.handleChange}
                  // required
                />
              </label>
              <label className="addboardlabel">
                Description:
                <input
                  type="text"
                  name="description"
                  // value={this.state.description}
                  // onChange={this.handleChange}
                  // required
                />
              </label>

              <div>
              <button className="submit" type="submit">
                Create Board
              </button>
              </div>
            </form>
        </PopupForm>
           </Paper>
    </ThemeProvider>

{/* 
    {props.boards.map((b) => (
      <div
      className= "BoardImages"
      style={{ display: "flex", justifyContent: "center", width: '100%', flexWrap: 'wrap'}}>
        <div className="imagecard" style={{ margin: "20px", maxWidth: 425, minWidth: 425}}>
          <div className="imagecontent">
            <div className="upload-image" component="img"></div>
            <div className="image-title">
              {" "}
        <h5>{b.title}</h5></div>
            <div className="image-desription">
              {" "}
        <h6>{b.description}</h6></div>
          </div>
        </div>
        </div>
        ))} */}
    </>
  );
}

export default Inspo;