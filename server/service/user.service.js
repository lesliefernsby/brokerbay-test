const { User } = require('../db/models');

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


module.exports = { getAll, getById }
