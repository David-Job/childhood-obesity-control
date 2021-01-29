// Web framework
const express = require("express");

// Cross-Origin Resource Sharing is needed
const cors = require("cors");

// Body parsing functions
const { json, urlencoded } = require("body-parser");

// Database connection
const { sequelize } = require("./models/index");

const { readdirSync } = require("fs");

console.log("index.js: " + sequelize);

const app = express();
const port = process.env.PORT || 4000;

app.use(cors()); // Enable CORS

app.use(json()); // application/json

app.use(urlencoded({ extended: true })); // application/x-www-form-urlencoded

//sequelize.sync(); // For production. Database is not dropped
sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// Middleware that checks if JWT token exists and verifies it if it does
// exist.
// In all future routes, this helps to know if the request is
// authenticated or not.

//app.use(function (req, res, next) {
//// check header or url parameters or post parameters for token
//var token = req.headers.authorization;

//if (!token) return next(); // If no token, continue

//if (req.headers.authorization.indexOf('Basic ') === 0) {
//// Verify auth basic credentials
//const base64Credentials = req.headers.authorization.split(' ')[1];
//const credentials = Buffer.from(
//base64Credentials,
//'base64',
//).toString('ascii');
//const [username, password] = credentials.split(':');

//req.body.username = username;
//req.body.password = password;

//return next();
//}

//token = token.replace('Bearer ', '');

//// .env should contain a line like JWT_SECRET=V3RY#1MP0RT@NT$3CR3T#
//jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
//if (err) {
//return res.status(401).json({
//error: true,
//message: 'Invalid user',
//});
//} else {
//req.user = user; // Set the user to req so other routes can use it
//req.token = token;
//next();
//}
//});
//});

//require('fs')
//.readdirSync('./routes')
//.filter((file) => {
//return (
//file.indexOf('.') !== 0 && // Ignore hidden files
////file !== basename &&
//file.slice(-3) === '.js' // Match js extension
//);
//})
//.forEach((file) => {
//const model = sequelize['import'](path.join(__dirname, file));
//db[model.name] = model;
//});

// Fetch and apply routing files
readdirSync("./routes")
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && // Ignore hidden files
      file.slice(-3) === ".js" // Match js extension
    );
  })
  .forEach((route) => {
    console.log(`Loading ./routes/${route}`);
    require(`./routes/${route}`)(app);
  });

app.listen(port, () => {
  console.log("Server started on: " + port);
});
