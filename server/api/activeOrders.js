const router = require('express').Router();
const { ActiveOrder } = require('../db/models');
const { Product } = require('../db/models');
const makeSearchFilter = require('../utils/makeSearchFilter');
module.exports = router;

router.get('/', (req, res, next) => {
  ActiveOrder.findAll({ where: makeSearchFilter(
    req.user, req.session
  )})
  .then(orders => res.json(orders))
  .catch(next);
});

router.post('/', (req, res, next) => {
  ActiveOrder.findOrCreate({ where: makeSearchFilter(
    req.user, req.session, { productId: req.body.productId }
  )})
    .spread((order, created) => {
      if (!created) {
        order.increment('quantity')
          .then(updatedOrder => res.json(updatedOrder));
      } else {
        res.json(order);
      }
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  const { newQuantity } = req.body;
  ActiveOrder.update({
    quantity: newQuantity
  }, {
    where: makeSearchFilter(
      req.user, req.session, { productId: req.params.id }
    ),
    returning: true
  })
    .then(([_, [newItem]]) => {
      res.status(200).json(newItem);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  ActiveOrder.destroy({ where: makeSearchFilter(
    req.user, req.session, { productId: req.params.id }
  )})
   .then(() => res.sendStatus(201))
   .catch(next);
});
