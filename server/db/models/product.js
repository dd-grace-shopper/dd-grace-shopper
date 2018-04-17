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
    get () {
      const priceStr = this.getDataValue('price').toString();
      const dollars = priceStr.slice(0, priceStr.length - 2);
      const cents = priceStr.slice(priceStr.length - 2);
      return dollars + '.' + cents;
    }
  },
  category: {
    type: Sequelize.STRING,   // set constants for categories
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  size: {
    type: Sequelize.ENUM('1750', '1000', '750', '375'),
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;
