const express = require("express");

const router = express.Router();
const userService = require("../service/user.service");

function getAll(req, res, next) {
  userService.getAll().then((users) => res.json(users));
}

function getById(req, res, next) {
  const id = parseInt(req.params.id, 10);

  userService
    .getById(id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)));
}

function updateUser(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const user = req.body;
  userService.updateUser(id, user);
}


router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateUser)

module.exports = router;

