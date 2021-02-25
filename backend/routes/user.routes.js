const { isAuthenticated, signin } = require("../auth");

module.exports = (app) => {
  const users = require("../controllers/user.controller");
  let router = require("express").Router();

  router.post("/signin", signin);
  router.post("/", users.create);
  router.get("/", isAuthenticated, users.findAll);
  router.get("/:id", isAuthenticated, users.findOne);
  router.put("/:id", isAuthenticated, users.update);
  router.delete("/:id", isAuthenticated, users.delete);

  app.use("/api/users", router);
};
