const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  let currentUser = "";

  socket.on("load message", (msg) => {
    currentUser = msg;
    console.log("message: " + msg);
    io.emit("load message", msg);
  });

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", { user: msg.user, message: msg.message });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit("disconnect message", {
      customEvent: `${currentUser} has disconnected`,
    });
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
