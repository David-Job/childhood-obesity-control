const request = require("request");

module.exports = (app) => {
  const users = require("../controllers/user.controller");
  let router = require("express").Router();

  //router.route("/signin").post(signin);

  router.route("/").post(users.create).get(users.findAll);

  router
    .route("/:id")
    .get(users.findOne)
    .put(users.update)
    .delete(users.delete);

  router.route("/report").get(async (_req, res) => {
    users
      .findAll()
      .then((data) => {
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
      })
      .catch();
  });

  app.use("/api/users", router);
};
