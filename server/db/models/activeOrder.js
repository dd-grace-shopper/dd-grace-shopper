const Sequelize = require('sequelize');
const db = require('../db');

const activeOrder = db.define('activeOrder', {
  productId
})


module.exports = activeOrder;
