const Sequelize = require('sequelize');
const db = require('../db');

const Size = db.define('size', {
  mililiter: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Size;
