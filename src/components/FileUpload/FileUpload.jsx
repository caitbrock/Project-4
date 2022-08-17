import React, { useState } from "react";
import { uploadFile } from "react-s3";
import "./FileUpload.css";
// installed using npm install buffer --save
window.Buffer = window.Buffer || require("buffer").Buffer;

// a React functional component, used to create a simple upload input and button
const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS,
  secretAccessKey: process.env.REACT_APP_SECRET,
};

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // the configuration information is fetched from the .env file

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadFile = async (file) => {
    uploadFile(file, config)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
  return (
    <div className="upload-container">
      <div className="create-post-header">Create Post</div>
      <br></br>
      <input type="file" onChange={handleFileInput} />
      <br></br>
      <input
        className="description-box"
        type="text"
        placeholder="Description"
      />
      <br></br>
      <button
        className="post-btn"
        onClick={() => handleUploadFile(selectedFile)}
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
