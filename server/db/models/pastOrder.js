const Sequelize = require('sequelize');
const db = require('../db');

function* idMaker() {
  var index = 0;
  while (index < index + 1) yield index++;
}
var gen = idMaker();

const PastOrder = db.define('pastOrder', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address_line1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address_city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address_zip: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address_state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address_country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id: {
    primaryKey: true,
    type: Sequelize.STRING,
    allowNull: false
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = PastOrder;
