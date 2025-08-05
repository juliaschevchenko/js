const { log } = require("./logger");

function registerUser(user) {
  if (!user.email.includes("@")) {
    throw new Error("Некорректный email");
  }

  log(`Пользователь ${user.name} зарегистрирован`);
}

module.exports = { registerUser };
