const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
   // allowNull: false,
    validate: {
      min: 1
    },
    get () {
      return this.getDataValue('price') / 100;
    },
    set(){
      return this.setDataValue('price') * 100;
    }
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Product;
