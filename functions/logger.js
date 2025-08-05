function logUserInfo(user, logger) {
  const msg = `${user.name}, ${user.age} лет`;
  logger(msg); // внешняя функция
}

function log(message) {
  console.log("LOG:", message);
}

module.exports = { log, logUserInfo };
