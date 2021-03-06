const jwt = require("jsonwebtoken");
const utils = require("./utils");
const bcrypt = require("bcryptjs");
const { secret } = require("./config/auth.config");
const db = require("./models");
const { user } = db;

exports.signIn = (req, res) => {
  const email = req.body.email;
  const pwd = req.body.password;

  // return 400 status if email/password is not exist
  if (!email || !pwd) {
    return res.status(400).json({
      error: true,
      message: "Email or Password required.",
    });
  }

  // return 401 status if the credential is not match.
  user
    .findOne({ where: { email: email } })
    .then((data) => {
      console.log(data.password);
      const result = bcrypt.compareSync(pwd, data.dataValues.password);
      //const result = pwd === data.dataValues.password;
      console.log(result);
      if (!result) return res.status(401).send("Password not valid!");

      // generate token
      const token = utils.generateToken(data);
      // get basic user details
      const userObj = utils.getCleanUser(data);
      // return the token along with user details
      return res.json({ user: userObj, access_token: token });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.isAuthenticated = (req, res, next) => {
  // check header or url parameters or post parameters for token
  // var token = req.body.token || req.query.token;
  console.log(req);
  var token = req.headers.authorization.split(" ")[1];
  console.log("Token: " + token);
  if (!token) {
    return res.status(400).json({
      error: true,
      message: "Token is required.",
    });
  }
  // check token that was passed by decoding token using secret
  // .env should contain a line like JWT_SECRET=V3RY#1MP0RT@NT$3CR3T#
  jwt.verify(token, secret, (err, data) => {
      if (err)
        return res.status(401).json({
          error: true,
          message: "Invalid token.",
        });

    console.log(data.user);
      user
        .findByPk(data.user.id)
        .then(() => {
          // return 401 status if the userId does not match.
          if (!data.user.id) {
            return res.status(401).json({
              error: true,
              message: "Invalid user.",
            });
          }
          // get basic user details
          next();
        })
        .catch((_err) => {
          res.status(500).send({
            message: "Error retrieving User with id=" + id,
          });
        });
    });
};
