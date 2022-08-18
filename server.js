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

app.get("/*", function (req, res) {
  res.send("<h1>Hello from chatapp</h1>");
});

const server = app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

const io = require("./config/socket").init(server);

io.on("connection", (socket) => {
  console.log(`Socket: ${socket.id} connection was made`);
  socket.emit("welcome", "welcome to my first socketIO app");
  socket.broadcast.emit("join", `Someone (${socket.id}) has joined the server`);
  socket.on("post", (data) => {
    socket.broadcast.emit("newPost", data);
  });
});
