const router = require('express').Router();
const { ActiveOrder } = require('../db/models');
const { Product } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  ActiveOrder.findAll({ include: [{ model: Product }] })
    .then(orders => res.json(orders))
    .catch(next);
});

router.post('/', (req, res, next) => {
  ActiveOrder.findOrCreate({
    where: {
      productId: req.body.productId,
      cookieId: req.body.cookieId
    }
  })
    .spread((order, created) => {
      if (!created) {
        order.increment('quantity');
      } else {
        res.json(order);
      }
    })
    .catch(next);
});
