const { User } = require("../db/models");

async function getAll() {
  const users = await User.findAll({ raw: true });
  return users;
}

async function getById(id) {
  const user = await User.findOne({
    where: {
      id,
    },
    raw: true,
  });
  if (!user) return;

  return user;
}

async function updateUser(id, user) {
  const userToUpdate = await User.findOne({
    where: {
      id,
    },
    raw: false,
  });

  if (!userToUpdate) return;
  const { firstName, lastName, email, phone } = user;

  console.log(userToUpdate);

  if (firstName) userToUpdate.firstName = firstName;
  if (lastName) userToUpdate.lastName = lastName;
  if (email) userToUpdate.email = email;
  if (phone) userToUpdate.phone = phone;

  await userToUpdate.save();

  return userToUpdate;
}

module.exports = { getAll, getById, updateUser };
