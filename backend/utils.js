// Generate token using secret from process.env.JWT_SECRET
var { sign } = require("jsonwebtoken");

// Generate token and return it
exports.generateToken = function (user) {
  // 1. Don't use password and other sensitive fields
  // 2. Use the information that are useful in other parts

  if (!user) return null;

  var u = {
    id: user.id,
    firstName: user.firstName,
    surname1: user.surname1,
    surname2: user.surname2,
    email: user.email,
    password: user.password,
  };

  // .env should contain a line like JWT_SECRET=V3RY#1MP0RT@NT$3CR3T#
  return sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24, // Expires in 24 hours
  });
};

// Return basic user details
exports.getCleanUser = function (user) {
  if (!user) return null;

  return {
    id: user.id,
    firstName: user.firstName,
    surname1: user.surname1,
    surname2: user.surname2,
    email: user.email,
    password: user.password,
  };
};
