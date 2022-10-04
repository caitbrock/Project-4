import React from "react";
import Chip from "@mui/material/Chip";
import "./Images.css";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function Images(props) {
  return (
    <>
      {props.posts.map((c) => (
        <div>
          <img
            className="imagecard"
            style={{ margin: "20px", maxHeight: 150, minWidth: 350 }}
            src={c.images}
          ></img>
          <div className="imagecontent">
            <div className="image-title">
              <h5>{c.title}</h5>
            </div>
            <div className="image-description">
              <h6>{c.destination}</h6>
            </div>
            <div className="image-description">
              <h6>{c.description}</h6>
            </div>
            <div className="image">{/* <img src={c.images}></img> */}</div>
          </div>

          {c.tags.map((m) => (
            <div className="imagetags">{m.tags}</div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Images;
