const Sequelize = require('sequelize');
const db = require('../db');

const PastOrder = db.define('pastOrder', {
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
})


module.exports = PastOrder;
