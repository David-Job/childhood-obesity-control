module.exports = (app) => {
  const request = require("request");
  const { isAuthenticated, signIn } = require("../auth");
  const users = require("../controllers/user.controller");
  let router = require("express").Router();

  router.route("/signin").post(signIn);

  router.route("/report").get(async (_req, res) => {
    users.report().then((data) => {
      let options = {
        uri: "http://localhost:5488/api/report",
        method: "POST",
        json: {
          template: { shortid: "jt7aYJu8Q9" },
          data: data,
          options: {
            preview: true,
          },
        },
      };
      request(options).pipe(res);
    });
  });

  router
    .route("/:id")
    .get(users.findOne)
    .put(users.update)
    .delete(users.delete);

  router.route("/").post(users.create).get(isAuthenticated, users.findAll);

  app.use("/api/users", router);
};
