const router = require('express').Router();
const { PastOrder } = require('../db/models');
module.exports = router;
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require('stripe')('sk_test_SVZzidxgnkraAFfvVqTCLf78');

router.post('/', (req, res, next) => {
  console.log('check here', req.body);
  PastOrder.create(req.body)
    .then(order => {
      const charge = stripe.charges.create({
        amount: order.total * 100, //charges in cents???
        currency: 'usd',
        description: 'Example charge',
        source: 'tok_visa' //use req.body if you want to charge the actual card
      });
      res.json(order);
    })
    .catch(next);
});
