const db = require('./server/db');
const Product = require('./server/db/models/product');
const ActiveOrder = require('./server/db/models/activeOrder');


const products = [
  {
  price: 10098,
  name: 'New Wine',
  category: 'red wine',
  country: 'USA',
  size: '750'
  },
  {price: 20098,
  name: 'Old Wine',
  category: 'white wine',
  country: 'USA',
  size: '750'},
  {price: 30098,
    name: 'Old Wine',
    category: 'white wine',
    country: 'USA',
    size: '750'},
  {price: 2098,
    name: 'Absolute',
    category: 'vodka',
    country: 'Russia',
    description: 'Vodka may be distilled from any starch- or sugar-rich plant matter; most vodka today is produced from grains such as sorghum, corn, rye or wheat. ',
    size: '750'},
  {price: 798,
    name: 'Baby\'s First Gin',
    category: 'gin',
    country: 'USA',
    size: '375'}
];

const activeOrders = [
  {
  cookieId: 1,
  quantity: 6,
  productId: 1
  },
  {
  cookieId: 2,
  quantity: 3,
  productId: 2
  },
  {
  cookieId: 2,
  productId: 3
  }
];


const seed = async () => {
  await Product.bulkCreate(products);
  await ActiveOrder.bulkCreate(activeOrders);
}
// const seed = () => ActiveOrder.bulkCreate(activeOrders);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
