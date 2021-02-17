const Model = require("./model");

const addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
};

const getUser = (idUser) => {
  return new Promise(async (resolve, reject) => {
    Model.findOne({ _id: idUser }, (err, user) => {
      if (err) {
        reject(err);
        return false;
      }

      resolve(user)
    });
  });
};

function listUsers() {
  return Model.find();
}

module.exports = {
  list: listUsers,
  add: addUser,
  getUser,
};
