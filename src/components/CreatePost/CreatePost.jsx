import React from "react";
import FileUpload from "../FileUpload/FileUpload";
import AddphotoTest from "../FileUpload/AddPhotoTest";
function CreatePost() {
  return (
    <div className="addpost">
      <FileUpload />
      <AddphotoTest />
    </div>
  );
}

export default CreatePost;
