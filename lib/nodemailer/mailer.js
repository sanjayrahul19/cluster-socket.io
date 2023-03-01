"use strict";

var nodeMailer = require("nodemailer");
var mailer = function mailer(value, otp) {
  console.log(value.email);
  var transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "sanjaytest1999@gmail.com",
      pass: "ytcgqafyjviximny"
    }
  });
  var info = transporter.sendMail({
    from: "sanjaytest1999@gmail.com",
    to: value.email,
    subject: "Verify Your Email -Node Team",
    html: "\n        <div>\n        <p><span style=\"font-weight:bold;font-size:1.6rem\">".concat(value.email, "</span>,We Welcome to our platform.</p>\n      <a style=\"background-color:#2980B9;color:white\" href=\"http://localhost:8000/user/verify/\"><b style=\"font-weight:bold;font-size:1.4rem\">").concat(otp, "</b></a>\n      <div style=\"background-color:#6DD5FA\">\n      <p>Thank and Regards</p>\n      <p>From Mini Team</p>\n        </div>\n        </div>\n        ")
  });
  if (info) {
    console.log(info);
  }
};
module.exports = {
  mailer: mailer
};