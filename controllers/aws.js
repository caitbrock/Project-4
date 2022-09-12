// const { S3Client } = require("@aws-sdk/client-s3");
// const multer = require("multer");
// const multerS3 = require("multer-s3");
// const AWS = require("aws-sdk");

// //AWS Upload//
// const s3 = new S3Client({
//   accessKeyId: process.env.REACT_APP_ACCESS,
//   secretAccessKey: process.env.REACT_APP_SECRET,
//   region: "ca-central-1",
// });

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.REACT_APP_BUCKET_NAME,
//     acl: "public-read",
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString());
//     },
//   }),
// });

// module.exports = upload;
