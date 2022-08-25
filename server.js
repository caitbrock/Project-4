const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

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

const imageUpload = require("./routes/api/aws");
app.use("/", imageUpload);
