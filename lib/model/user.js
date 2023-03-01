"use strict";

var joi = require("joi");
var mongoose = require("mongoose");
var userSchema = joi.object({
  name: joi.string(),
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ["com", "net"]
    }
  }).required().trim().lowercase(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required().trim(),
  confirmPassword: joi.string().valid(joi.ref("password")).required().trim()
});
var User = mongoose.model("users", {
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String
  },
  verified: {
    type: Boolean,
    "default": false
  },
  otp: {
    type: Number
  }
});
module.exports = {
  userSchema: userSchema,
  User: User
};