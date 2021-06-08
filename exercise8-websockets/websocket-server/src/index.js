const express = require("express");
const app = express();

const http = require("http");
const server = http.Server(app);

const socketIO = require("socket.io");
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("new-message", (message) => {
    console.log(`received message: ${message}`);
    io.emit("new-message", message);
  });
});

setTimeout(() => {
  io.emit("new-message", "hi, is somebeody there?!");
}, 15000);

setInterval(() => {
  io.emit("new-message", "WOOOOHOOO00O!!!");
}, 300000);

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});
