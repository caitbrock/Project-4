import React from "react";
import FileUpload from "../FileUpload/FileUpload";
import DraggableUploader from "../FileUpload/DraggableUploader";

function CreatePost() {
  return (
    <div className="addpost">
      <FileUpload />
      <DraggableUploader />
    </div>
  );
}

export default CreatePost;
