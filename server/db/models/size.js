const Sequelize = require('sequelize');
const db = require('../db');

const Size = db.define('size', {
  mililiter: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get() {
      let size;
      if (this.getDataValue('mililiter') < 1000) {
        size = this.getDataValue('mililiter') + 'ml';
      } else {
        size = this.getDataValue('mililiter') / 1000 + 'L';
      }
      return size;
    }
  }
});

module.exports = Size;
