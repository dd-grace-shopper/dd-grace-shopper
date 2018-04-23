const router = require('express').Router();
const { Product, Category, Country, Size } = require('../db/models');
const getDataByIdObj = require('../utils/arrayToObjectById');
module.exports = router;

// utils
// const getDataByIdObj = dataArray => {
//   return dataArray.reduce((dataByIdObj, item) => {
//     dataByIdObj[item.id] = item;
//     return dataByIdObj;
//   }, {});
// };

const getDataIdArray = dataArray => {
  return dataArray.reduce((dataIdArr, item) => {
    dataIdArr.push(item.id);
    return dataIdArr;
  }, []);
};


router.get('/', (req, res, next) => {
  Product.findAll({ include: [ Category, Country, Size ]})
    .then(products => {
      res.status(200).json({
        productsById: getDataByIdObj(products),
        products: getDataIdArray(products)
      });
    })
    .catch(next);
});
