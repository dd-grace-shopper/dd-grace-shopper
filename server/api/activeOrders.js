const router = require('express').Router();
const { ActiveOrder } = require('../db/models');
const { Product } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  const searchFilter = req.user ? {userId: req.user.id} : {sessionId: req.session.id };
    ActiveOrder.findAll({ where:
      searchFilter
    })
    .then(orders => res.json(orders))
    .catch(next);
});

router.post('/', (req, res, next) => {
  const searchFilter = req.user
    ? {productId: req.body.productId, userId: req.user.id}
    : {sessionId: req.session.id, productId: req.body.productId};
  ActiveOrder.findOrCreate({
    where: searchFilter
  })
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
  const { newQuantity } = req.body; // { newQuantity: n }
  ActiveOrder.update({
    quantity: newQuantity
  }, {
    where: { productId: req.params.id },
    returning: true
  })
    .then(([_, [newItem]]) => {
      res.status(200).json(newItem);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  ActiveOrder.destroy({ where: {productId: req.params.id }})
   .then(() => res.sendStatus(201))
   .catch(next);
});
