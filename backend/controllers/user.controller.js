const { user } = require("../models");

// Create an User
exports.create = (req, res) => {
  if (!req.body.firstName || !req.body.surname1 || !req.body.surname2) {
    res.status(400).send({
      message: "Content can not be empty",
    });
    return;
  }

  user
    .create(req.body)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Read all Users
exports.findAll = (_, res) => {
  user
    .findAll()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users",
      });
    });
};

exports.report = async () => {
  await user
    .findAll()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users",
      });
      return null;
    });
};

// Read one User
exports.findOne = (req, res) => {
  const id = req.params.id;

  user
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving User with id=" + id,
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

  user
    .update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "User was updated successfully." });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not fout or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error updating User with id=" + id });
    });
};

// Delete an User
exports.delete = (req, res) => {
  const targetId = req.params.id;

  user
    .destroy({ where: { id: targetId } })
    .then((num) => {
      if (num == 1) {
        res.send({ messagge: "User was deleted successfully." });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error deleting User with id=" + id });
    });
};
