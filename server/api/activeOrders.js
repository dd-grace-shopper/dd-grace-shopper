const router = require('express').Router();
const { ActiveOrder } = require('../db/models');
const { Product } = require('../db/models');
module.exports = router;

//you can have a utils function router.use that you can use as middleware prior to entering the rest of the cart req,res, next functions

//should only be able to update my own, possible middleware?

// /api/activeOrders/:id
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
          //catch those errors!
      } else {
        res.json(order);
      }
    })
    .catch(next);

    /*
        .spread((order, created) => {
      if (!created) {
        return order.increment('quantity')
      } else {
        return order;
      }
    })
    .then(order => res.json(order))
    .catch(next);
    */
});

router.put('/:id', (req, res, next) => {
  const { newQuantity } = req.body; // { newQuantity: n }
  ActiveOrder.update({
    quantity: newQuantity
  }, {
    //OB/SZ: would this not update ALL orders/carts with this product Id?
    where: { productId: req.params.id },
    returning: true
  })
    .then(([_, [newItem]]) => {
      res.status(200).json(newItem);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  //delete ALL THE ORDERS!
  ActiveOrder.destroy({ where: {productId: req.params.id }})
  //204: no content send status, instead of 201: created
   .then(() => res.sendStatus(201))
   .catch(next);
});
