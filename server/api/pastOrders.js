const router = require('express').Router();
const { PastOrder, Product } = require('../db/models');
module.exports = router;
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require('stripe')('sk_test_SVZzidxgnkraAFfvVqTCLf78');

router.post('/', (req, res, next) => {
  PastOrder.create(req.body)
    .then(order => {
      const charge = stripe.charges.create({
        amount: order.total * 100, //charges in cents???
        currency: 'usd',
        description: 'Example charge',
        source: 'tok_visa' //use req.body if you want to charge the actual card
      });
      order.setProducts(req.body.cart);
      res.json(order);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  PastOrder.findById(req.params.id, { include: [{ all: true }] }).then(order =>
    res.json(order)
  );
});
