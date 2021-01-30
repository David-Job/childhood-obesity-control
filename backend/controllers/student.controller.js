const { student } = require("../models");

// Create an Student
exports.create = (req, res) => {
  if (!req.body.firstName || !req.body.surname1 || !req.body.surname2) {
    res.status(400).send({
      message: "User data can not be empty",
    });
    return;
  }

  const userBody = req.body;

  student.create({ user: userBody }).catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Student.",
    });
  });
};

// Read all Students
exports.findAll = (_, res) => {
  student
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving students",
      });
    });
};

// Read one Student
exports.findOne = (req, res) => {
  const id = req.params.id;

  student
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Student with id=" + id,
      });
    });
};

// Update an Student
exports.update = (req, res) => {
  const id = req.params.id;

  if (!req.body.firstName || !req.body.surname1 || !req.body.surname2) {
    res.status(400).send({
      message: "User data can not be empty",
    });
    return;
  }

  const studentBody = { user: req.body };

  student
    .update(studentBody, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ messagge: "Student was updated successfully." });
      } else {
        res.send({
          message: `Cannot update Student with id=${id}. Maybe Student was not fout or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Student with id=" + id,
      });
    });
};

// Delete an Student
exports.delete = (req, res) => {
  const id = req.params.id;

  student
    .destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ messagge: "Student was deleted successfully." });
      } else {
        res.send({
          message: `Cannot delete Student with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error deleting Student with id=" + id,
      });
    });
};
