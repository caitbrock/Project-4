import React from "react";
import Chip from "@mui/material/Chip";
import "./Images.css";
import { styled } from "@mui/material/styles";
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider, createTheme } from "@mui/material/styles";


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

function Images(props) {
  return (
    <>
      {props.posts.map((c) => (
        <div
          className="imagecard"
          style={{ margin: "20px", maxWidth: 425, minWidth: 425 }}
        >
          <div className="imagecontent">
            <div className="upload-image" component="img">
              {/* <img src={url} /> */}
            </div>
            <div className="image-title">
              {" "}
              <h5>{c.title}</h5>
            </div>
            <div className="image-desription">
              {" "}
              <h6>{c.destination}</h6>
            </div>
            <div className="image-desription">
              {" "}
              <h6>{c.description}</h6>
            </div>
          </div>

          {c.tags.map((m) => (
            <div className="imagetags">{m.tags}</div>
          ))}


<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <AddIcon/>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Board X</a>
  </div>
</div>
        </div>
      ))}
    </>
  );
}

export default Images;
