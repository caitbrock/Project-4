
import AWS from "aws-sdk";
import "./FileUpload.css";
import { render } from "@testing-library/react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import React, { Component } from "react";

export default class FileUpload extends Component {

render() {
  return (
    <div className="upload-container">
      <form action="/" enctype="multipart/form-data" method="post">
        <div class="form-group">
          <input type="file" class="form-control-file" name="file" />
          {/* <input type="submit" value="Upload!" class="upload-botton" />  */}
        </div>
      </form>
    </div>
  );
}
}
