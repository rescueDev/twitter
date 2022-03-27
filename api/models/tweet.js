const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Tweet = sequelize.define("Tweet", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  likes: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: true,
    default: 0,
  },
  retweets: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: true,
    default: 0,
  },
  comments: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: true,
    default: 0,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Tweet;
