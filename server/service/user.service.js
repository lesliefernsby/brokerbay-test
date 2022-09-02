const { User } = require("../db/models");
const { NotFoundError } = require("../helpers/errors/NotFoundError");

async function getAll() {
  const users = await User.findAll({ raw: true });

  if (!users) throw new NotFoundError('No users found', "NotFoundError");
  return users;
}

async function getById(id) {
  const user = await User.findOne({
    where: {
      id,
    },
    raw: true,
  });

  if (!user) {
    
    throw new NotFoundError('User not found', "NotFoundError");
  }

  return user;
}

async function updateUser(id, user) {
  const userToUpdate = await User.findOne({
    where: {
      id,
    },
    raw: false,
  });

  if (!userToUpdate) throw new NotFoundError('User not found', "NotFoundError");
  const { firstName, lastName, email, phone } = user.data;
  if (firstName) userToUpdate.firstName = firstName;
  if (lastName) userToUpdate.lastName = lastName;
  if (email) userToUpdate.email = email;
  if (phone) userToUpdate.phone = phone;

  await userToUpdate.save();

  return userToUpdate;
}

async function deleteUser(id) {
  const userToDelete = await User.findOne({
    where: {
      id,
    },
    raw: false,
  });

  if (!userToDelete) throw new NotFoundError('User not found', "NotFoundError");

  await User.destroy({ where: { id } });

  return id;
}

module.exports = { getAll, getById, updateUser, deleteUser };
