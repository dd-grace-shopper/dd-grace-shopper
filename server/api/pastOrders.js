const router = require('express').Router();
const { PastOrder } = require('../db/models');
module.exports = router;
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require('stripe')('sk_test_SVZzidxgnkraAFfvVqTCLf78');

function requireLoggedInUser (req, res, next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

router.get('/', requireLoggedInUser, (req, res, next) => {
  PastOrder.findAll({
    where: {
      userId: req.user.id
    }
  })
  .then(orders => res.json(orders))
  .catch(next);
});

router.post('/', requireLoggedInUser, (req, res, next) => {
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
