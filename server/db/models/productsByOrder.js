const Sequelize = require('sequelize');
const db = require('../db');

const ProductsByOrder = db.define('productsByOrder', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
});

module.exports = ProductsByOrder;
