const express = require("express");

const router = express.Router();
const userService = require("../service/user.service");

function getAll(req, res, next) {
  userService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  const id = parseInt(req.params.id, 10);

  userService
    .getById(id)
    .then((user) => {
      console.log(user);
      return res.json(user);
    })
    .catch((err) => next(err));
}

function updateUser(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const user = req.body;
  userService
    .updateUser(id, user)
    .then((user) => res.json(user))
    .catch(err => next(err));
}

function deleteUser(req, res, next) {
  const id = parseInt(req.params.id, 10);
  userService
    .deleteUser(id)
    .then((user) => res.json(user))
    .catch(err => next(err));
}

router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
