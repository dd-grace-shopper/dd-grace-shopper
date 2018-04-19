const Sequelize = require('sequelize');
const db = require('../db');

function* idMaker() {
  var index = 0;
  while (index < index+1)
    yield index++;
}
var gen = idMaker();


const PastOrder = db.define('pastOrder', {
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    set(){
      return gen.next().value;
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
})

module.exports = PastOrder;

