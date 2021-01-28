const db = require("../models/index");
const User = db.user;
//const { Op } = db.Sequelize;

//const User = require("../models/user.model");
console.log(User);

// Create an User
exports.create = (req, res) => {
  if (!req.body.firstName || !req.body.surname1 || !req.body.surname2) {
    res.status(400).send({
      message: "Content can not be empty",
    });
    return;
  }

  let user = {
    firstName: req.body.firstName,
    surname1: req.body.surname1,
    surname2: req.body.surname2,
    email: req.body.email,
  };

  User.create(user)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};


// Read all Users
exports.findAll = (req, res) => {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users",
      });
    });
};


// Read one User
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    });
};


// Update an User
exports.update = (req, res) => {
  const id = req.params.id;

  if (!req.body.firstName || !req.body.surname1 || !req.body.surname2) {
    res.status(400).send({
      message: "Content can not be empty",
    });
    return;
  }

  User.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ messagge: "User was updated successfully." });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not fout or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating User with id=" + id });
    });
};


// Delete an User
exports.delete = (req, res) => {
  const id = req.params.id;
  
  User.destroy({where:{id:id}})
    .then()
    .catch()
};
