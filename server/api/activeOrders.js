const router = require('express').Router();
const { ActiveOrder } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  ActiveOrder.findAll({ include: [{ all: true }] })
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
        order.quantity++;
      } else {
        res.json(order);
      }
    })
    .catch(next);
});
