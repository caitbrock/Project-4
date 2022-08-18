import React, { useState } from "react";
import AWS from "aws-sdk";
import "./FileUpload.css";
import { render } from "@testing-library/react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const S3_BUCKET = process.env.REACT_APP_BUCKET_NAME;
const REGION = process.env.REACT_APP_REGION;


AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS,
  secretAccessKey: process.env.REACT_APP_SECRET,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const UploadImageToS3WithNativeSdk = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadFile = (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };
    //construct url string to match the aws url, use file.name
    myBucket
      .putObject(params, function (err, data) {
        console.log(data);
        console.log(err);
      })
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };

  return (
    <div className="upload-container">
      <input
        style={{display: "none"}}
        className="choose-file"
        type="file"
        multiple="true"
        onChange={handleFileInput}
        accept=".png,.jpg,.jpeg,.wmv,.avi"
      />
      <div>Uploading... {progress}%</div>
      <button
        className="post-btn"
        onClick={() => handleUploadFile(selectedFile)}
      >
        Upload Image
        <span>
              <AddPhotoAlternateIcon />
            </span>
      </button>
    </div>
  );
};

export default UploadImageToS3WithNativeSdk;
