const router = require('express').Router();
const { PastOrder, Product } = require('../db/models');
const ProductsByOrder = require('../db/models/productsByOrder');
const { isAdminOrSelf, requireLoggedInUser } = require('./utils');
module.exports = router;
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require('stripe')('sk_test_SVZzidxgnkraAFfvVqTCLf78');

router.get('/', requireLoggedInUser, (req, res, next) => {
  PastOrder.findAll({
    where: {
      userId: req.user.id
    }
  })
    .then(orders => res.json(orders))
    .catch(next);
});

router.post('/', (req, res, next) => {
  PastOrder.create(req.body)
    .then(order => {
      const charge = stripe.charges.create({
        amount: order.total * 100, //charges in cents???
        currency: 'usd',
        description: 'Example charge',
        source: 'tok_visa' //use req.body if you want to charge the actual card
      });
      const createRows = [];
      for (let prop in req.body.cart) {
        createRows.push(req.body.cart[prop]);
      }
      createRows.forEach(val => (val.pastOrderId = order.id));
      res.json(order);
      ProductsByOrder.bulkCreate(createRows);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  PastOrder.findById(req.params.id, { include: [{ all: true }] }).then(order =>
    res.json(order)
  );
});

router.get('/:id/quantity', (req, res, next) => {
  ProductsByOrder.findAll({
    where: {
      pastOrderId: req.params.id
    }
  }).then(quantity => {
    res.json(quantity);
  });
});
