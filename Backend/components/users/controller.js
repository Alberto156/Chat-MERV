const store = require("./store");
const validator = require("email-validator");

const getAllUsers = () => {
  let users = store.list();
  return new Promise((resolver, reject) => {
    resolver(users);
  });
};

const addUser = (User) => {
  return new Promise(async (resolve, reject) => {
    //Validate password
    if (User.passwordConfirm != User.password) {
      reject("Passwords do not match");
      return false;
    }

    //Validate email
    if (!validator.validate(User.email)) {
      reject("Invalid email address");
      return false;
    }

    delete User.passwordConfirm;

    await store.add(User).catch((e) => {
      reject("Internal Error");
      return false;
    });

    resolve("Usuario agregado");
  });
};

const getUserId = (idUser) => {
  return new Promise(async (resolve, reject) => {
    const user = await store.getUser(idUser).catch((e) => {
      reject("Internal Error");
      return false;
    });
    resolve(user);
  });
};

// const updateUser = () => {
//   return new Promise((resolve , reject)=>{

//   })
// }

// const login = (user) => {
//   return new Promise((resolve , reject)=>{

//   })
// }

module.exports = {
  getAllUsers,
  addUser,
  getUserId,
};
