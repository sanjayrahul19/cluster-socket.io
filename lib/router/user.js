"use strict";

var router = require("express").Router();
var verifyToken = require("../middleware/user");
var userSignUp = require("../controller/userSignUp");
var userVerify = require("../controller/userVerify.js");
var _require = require("../controller/userLogin"),
  userLogin = _require.userLogin;
var _require2 = require("../controller/adminLogin"),
  adminLogin = _require2.adminLogin;
var _require3 = require("../controller/adminSignUp"),
  adminSignUp = _require3.adminSignUp;
var _require4 = require("../controller/adminVerify"),
  adminVerify = _require4.adminVerify;
router.post("/user/signup", userSignUp);
router.get("/user/verify", verifyToken, userVerify);
router.post("/user/login", userLogin);
router.post("/admin/signup", adminSignUp);
router.post("/admin/login", adminLogin);
router.get("/admin/verify", verifyToken, adminVerify);
module.exports = router;