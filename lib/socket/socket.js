"use strict";

var http = require("http");
var socket = require("socket.io");
module.exports = sockets = function sockets() {
  var server = http.createServer(app);
  var Server = socket.Server;
  var io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
  io.on("connection", function (Socket) {
    console.log("connected");
    Socket.on("disconnect", function () {
      console.log("Disconnected");
    });
  });
};