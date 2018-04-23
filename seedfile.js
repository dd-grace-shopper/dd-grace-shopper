const db = require('./server/db');
const Product = require('./server/db/models/product');
const ActiveOrder = require('./server/db/models/activeOrder');
const Category = require('./server/db/models/category');
const Size = require('./server/db/models/size');
const Country = require('./server/db/models/country');

const products = [
  {
    price: 9999,
    name: 'D & D Red Wine',
    categoryId: 1,
    sizeId: 3,
    description: 'Top shelf red wine from yours truly. ',
    countryId: 2,
    imageUrl:
      'https://images.crateandbarrel.com/is/image/Crate/OregonBigRedWine21ozSHF15/?$web_product_hero$&150817110052&wid=625&hei=625'
  },
  {
    price: 1999,
    name: 'Kendall Jackson Cabernet Sauvignon',
    categoryId: 1,
    sizeId: 3,
    description: 'Yummy red wine',
    countryId: 2,
    imageUrl:
      'http://www.totalwine.com/media/sys_master/twmmedia/hb4/h76/8807386742814.png'
  },
  {
    price: 4999,
    name: 'D & D White Wine',
    categoryId: 2,
    description: 'Top shelf white wine from yours truly. ',
    sizeId: 3,
    countryId: 1,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/White_Wine_Glas.jpg/220px-White_Wine_Glas.jpg'
  },
  {
    price: 1499,
    name: 'Oyster Bay Sauvignon Blanc',
    categoryId: 2,
    description: 'Yummy white wine',
    sizeId: 3,
    countryId: 7,
    imageUrl:
      'http://www.totalwine.com/media/sys_master/twmmedia/h10/hd5/8804752523294.png'
  },
  {
    price: 2499,
    name: 'Bacardi Superior',
    categoryId: 3,
    sizeId: 1,
    description: 'Bats are cool. ',
    countryId: 6,
    imageUrl:
      'https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/882/images/6247/bacardi_superior_15nv_175__56312.1472067072.380.500.jpg?c=2'
  },
  {
    price: 1999,
    name: 'Bacardi Limon',
    categoryId: 3,
    sizeId: 2,
    description: 'Bats are cool. ',
    countryId: 6,
    imageUrl: 'https://img.thewhiskyexchange.com/900/rum_bac7.jpg'
  },
  {
    price: 2499,
    name: "Tito's",
    description:
      'Vodka may be distilled from any starch- or sugar-rich plant matter; most vodka today is produced from grains such as sorghum, corn, rye or wheat. ',
    categoryId: 4,
    countryId: 5,
    sizeId: 2,
    imageUrl:
      'https://drizly-products1.imgix.net/ci-titos-handmade-vodka-a4336828f809309d.png?auto=format%2Ccompress&fm=jpeg&q=20'
  },
  {
    price: 1999,
    name: "Tito's",
    description:
      'Vodka may be distilled from any starch- or sugar-rich plant matter; most vodka today is produced from grains such as sorghum, corn, rye or wheat. ',
    categoryId: 4,
    countryId: 5,
    sizeId: 3,
    imageUrl:
      'https://drizly-products1.imgix.net/ci-titos-handmade-vodka-a4336828f809309d.png?auto=format%2Ccompress&fm=jpeg&q=20'
  },
  {
    price: 3499,
    name: 'New Amsterdam',
    categoryId: 5,
    description: 'Gin gin gin gin gin gin.',
    countryId: 5,
    sizeId: 2,
    imageUrl:
      'http://www.totalwine.com/media/sys_master/twmmedia/h59/h26/9877672951838.png'
  },
  {
    price: 4499,
    name: 'Jack Daniels',
    categoryId: 6,
    description: 'Bomb Tennessee whiskey',
    countryId: 5,
    sizeId: 1,
    imageUrl:
      'https://drizly-products1.imgix.net/ci-jack-daniels-old-no-7-eb589ada0c4a8027.jpeg?auto=format%2Ccompress&fm=jpeg&q=20'
  },
  {
    price: 4499,
    name: 'Jack Daniels Honey',
    categoryId: 6,
    description: 'Bomb Tennessee honey whiskey',
    countryId: 5,
    sizeId: 2,
    imageUrl:
      'https://i5.walmartimages.com/asr/c071a854-245c-44c1-8d93-da3c7f4747b8_1.8c8f636b888e0edebe3c2c187d222bbd.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'
  },
  {
    price: 11099,
    name: 'Jameson Irish Whishkey',
    categoryId: 6,
    description: 'Irish Whiskey',
    countryId: 5,
    sizeId: 4,
    imageUrl:
      'https://img.thewhiskyexchange.com/900/irish_jam1.jpg'
  }
];

const sizes = [
  {
    mililiter: 1750
  },
  {
    mililiter: 1000
  },
  {
    mililiter: 750
  },
  {
    mililiter: 375
  }
];

const categories = [
  { category: 'Red Wine' },
  { category: 'White Wine' },
  { category: 'Rum' },
  { category: 'Vodka' },
  { category: 'Gin' },
  { category: 'Whiskey' },
  { category: 'Brandy' },
  { category: 'Tequila' },
  { category: 'Liquor' }
];

const countries = [
  { name: 'France' },
  { name: 'Italy' },
  { name: 'Spain' },
  { name: 'Ireland' },
  { name: 'USA' },
  { name: 'South America' },
  { name: 'New Zealand' }
];

const activeOrders = [
  {
    sessionId: '1',
    quantity: 6,
    productId: 1
  },
  {
    sessionId: '2',
    quantity: 3,
    productId: 2
  },
  {
    sessionId: '2',
    productId: 3
  }
];

const seed = async () => {
  await Category.bulkCreate(categories);
  await Country.bulkCreate(countries);
  await Size.bulkCreate(sizes);
  await Product.bulkCreate(products);
  await ActiveOrder.bulkCreate(activeOrders);
};
// const seed = () => ActiveOrder.bulkCreate(activeOrders);

const main = () => {
  console.log('Syncing db...');
  db
    .sync({ force: true })
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
