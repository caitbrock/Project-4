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
        <div
          className="imagecard"
          style={{ margin: "20px", maxWidth: 350, minWidth: 350 }}
        >
          <div className="imagecontent">
            <div className="upload-image" component="img">
              <img src={url} />
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
        </div>
      ))}
    </>
  );
}

export default Images;
