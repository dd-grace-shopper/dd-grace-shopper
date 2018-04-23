const User = require('./user');
const Product = require('./product');
const Category = require('./category');
const Country = require('./country');
const Size = require('./size');
const ActiveOrder = require('./activeOrder');
const PastOrder = require('./pastOrder');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

//cart stuff
Product.hasMany(ActiveOrder);
ActiveOrder.belongsTo(Product);

//Work out a way to add quantity using this join table
//use this as a model and define quantities & price
Product.belongsToMany(PastOrder, { through: 'products_order' });
PastOrder.belongsToMany(Product, { through: 'products_order' });

User.hasMany(PastOrder);
PastOrder.belongsTo(User);

User.hasMany(ActiveOrder);
ActiveOrder.belongsTo(User);

// non-cart stuff
// Product.belongsToMany(Category, { through: 'Product-Category' });
// Category.belongsToMany(Product, { through: 'Product-Category' });
Product.belongsTo(Category);
Category.hasMany(Product);
Product.belongsTo(Country);
Country.hasMany(Product);
Product.belongsTo(Size);
Size.hasMany(Product);

module.exports = {
  User,
  Product,
  ActiveOrder,
  PastOrder,
  Size,
  Country,
  Category
};
