// Web framework
const express = require("express");

// Cross-Origin Resource Sharing is needed
const cors = require("cors");

// Body parsing functions
const { json, urlencoded } = require("body-parser");

// Database connection
const { sequelize } = require("./models/index");

const { readdirSync } = require("fs");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors()); // Enable CORS

app.use(json()); // application/json

app.use(urlencoded({ extended: true })); // application/x-www-form-urlencoded

//sequelize.sync(); // For production. Database is not dropped

sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

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
