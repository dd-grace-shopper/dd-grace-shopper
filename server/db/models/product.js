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
    validate: {
      min: 1
    },
    set(price) {
      this.setDataValue('price', price * 100);
    },
    get() {
      return this.getDataValue('price') / 100;
    }
  },
  priceRange: {
    type: Sequelize.VIRTUAL,
    get() {
      if (this.getDataValue('price') < 2000) {
        return '$';
      } else if (
        this.getDataValue('price') >= 2000 &&
        this.getDataValue('price') < 5000
      ) {
        return '$$';
      } else if (
        this.getDataValue('price') >= 5000 &&
        this.getDataValue('price') < 10000
      ) {
        return '$$$';
      } else {
        return '$$$$';
      }
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
