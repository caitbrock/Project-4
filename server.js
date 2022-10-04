const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const { generateUploadURL } = require("./s3Service");

require("dotenv").config();
require("./config/database.js");

const port = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/users", require("./routes/api/users"));
app.use(require("./config/auth"));

app.use("/api/posts", require("./routes/api/posts"));

// app.use((error, req, res, next) => {
//   if (error instanceof multer.MulterError) {
//     if (error.code === "LIMIT_FILE_SIZE") {
//       return res.status(400).json({
//         message: "file is too large",
//       });
//     }

//     if (error.code === "LIMIT_FILE_COUNT") {
//       return res.status(400).json({
//         message: "File limit reached",
//       });
//     }

//     if (error.code === "LIMIT_UNEXPECTED_FILE") {
//       return res.status(400).json({
//         message: "File must be an image",
//       });
//     }
//   }
// });

app.get("/s3Url", async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const server = app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

const io = require("./config/socket").init(server);

io.on("connection", (socket) => {
  socket.broadcast.emit("join", `Someone (${socket.id}) has joined the server`);
  socket.on("post", (data) => {
    socket.broadcast.emit("newPost", data);
  });
});
