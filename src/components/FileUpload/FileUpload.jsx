import React, { Component } from "react";

export default class FileUpload extends Component {
  render() {
    return (
      <div className="container">
        <form action="/" enctype="multipart/form-data" method="post">
          <div class="form-group">
            <input type="file" class="form-control-file" name="file" />
            <input type="submit" value="Upload!" class="upload-botton" />
          </div>
        </form>
      </div>
    );
  }
}
