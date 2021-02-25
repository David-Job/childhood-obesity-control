module.exports = (app) => {
  const users = require("../controllers/auth.controller");
  let router = require("express").Router();

  router.post("/", users.create);

  app.use("/api/signin", router);
};
