const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    // validation to make sure price can't be negative
    get () { // should return a 'number' type
      // const priceStr = this.getDataValue('price').toString();
      // const dollars = priceStr.slice(0, priceStr.length - 2);
      // const cents = priceStr.slice(priceStr.length - 2);
      // return dollars + '.' + cents;
      return this.getDataValue('price') / 100;
    }
  },
  category: { // separate table?
    type: Sequelize.STRING,   // set constants for categories
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  size: { // separate table?
    type: Sequelize.ENUM('1750', '1000', '750', '375'),
    allowNull: false
  },
  country: { // separate table?
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;
