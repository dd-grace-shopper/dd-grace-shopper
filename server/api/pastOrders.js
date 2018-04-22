const router = require('express').Router();
const { PastOrder } = require('../db/models');
module.exports = router;

router.post('/', (req, res, next) => {
  PastOrder.create(req.body)
    .then(order => res.json(order))
    .catch(next);
});
