"use strict";

exports.response = function (res, statusCode, message, data) {
  res.status(statusCode).json({
    message: message,
    data: data
  });
};