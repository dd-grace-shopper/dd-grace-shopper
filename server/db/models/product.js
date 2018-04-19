const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      min: 1
    },
    set(price) {
      this.setDataValue('price', price / 100);
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://d14vtdp4hn1qux.cloudfront.net/assets/revamp/wine-placeholder-560512e07fc89ac005242a6ab3065c07.jpg'
  }
});

module.exports = Product;
