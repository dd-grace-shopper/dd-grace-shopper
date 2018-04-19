const Sequelize = require('sequelize');
const db = require('../db');

const Country = db.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Country;
