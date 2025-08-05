const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "../logs/app.log");

function log(message) {
  const timestamp = new Date().toISOString();
  const fullMessage = `[${timestamp}] ${message}\n`;

  fs.appendFileSync(logFilePath, fullMessage, "utf8");
}

function logUserInfo(user, logger = log) {
  const msg = `${user.name}, ${user.age} лет`;
  logger(msg);
}

module.exports = { log, logUserInfo };
