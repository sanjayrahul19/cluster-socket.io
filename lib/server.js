"use strict";

var express = require("express");
var cors = require("cors");
var app = express();
var PORT = 8000;
var connectDB = require("./config/db");
var router = require("./router/user");
var cluster = require("cluster");
var os = require("os");
var sockets = require("../socket/socket");
var cpu = os.cpus().length;
app.use(cors());
app.use(express.json());
connectDB();
app.use("/", router);
sockets();
if (cluster.isMaster) {
  for (var i = 0; i < cpu; i++) {
    cluster.fork();
  }
} else {
  server.listen(PORT, function () {
    console.log("Server is up and running " + PORT);
  });
}