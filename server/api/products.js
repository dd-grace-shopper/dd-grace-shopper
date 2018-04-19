const router = require('express').Router();
const { Product } = require('../db/models');
module.exports = router;

const getDataByIdObj = dataArray => {
  return dataArray.reduce((dataByIdObj, datum) => {
    dataByIdObj[datum.id] = datum;
    return dataByIdObj;
  }, {});
};

const getDataIdArray = dataArray => {
  return dataArray.reduce((dataIdArr, datum) => {
    dataIdArr.push(datum.id);
    return dataIdArr;
  }, []);
};

router.get('/', (req, res, next) => {
  Product.findAll({ include: [{ all: true }] })
    .then(products => {
      res.status(200).json({
        cookieId: res.cookieId,
        productsById: getDataByIdObj(products),
        products: getDataIdArray(products)
      });
    })
    .catch(next);
});
