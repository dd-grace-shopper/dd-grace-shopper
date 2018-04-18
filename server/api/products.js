const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

const objectifiedData = (array) => {
  return array.reduce((object, item) => {
    object[item.id] = item
    return object
  }, {})
}

router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.status(200).json({
        productsById: objectifiedData(products),
        cookieId: res.cookieId
      });
    })
    .catch(next)
})
