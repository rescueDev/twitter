const Sequelize = require("sequelize");

const sequelize = new Sequelize("twitter_rest_api", "root", "root", {
  dialect: "mariadb",
  host: "docker_rasp",
});

module.exports = sequelize;
