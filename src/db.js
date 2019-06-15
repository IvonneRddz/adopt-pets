const db = {
  users: [],
  pets: [],
};

export const register = user => {
  db.users.push(user);
};

export const getUsers = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ code: 401, message: 'not authorized'});
  }, 500);
});

