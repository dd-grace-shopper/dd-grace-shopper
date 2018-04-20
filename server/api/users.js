const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

function requireAdmin (req, res, next) {
  if (req.user.isAdmin) {
    next();
  } else {
    res.sendStatus(401);
  }
}
router.get('/', requireAdmin, (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  User.update(req.body, {
    where: {
      id
    },
    returning: true
  })
  .then(([rowCount, [updatedUser]]) => {
    res.json(updatedUser);
  })
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  User.destroy({
    where: {
      id
    }
  })
  .then(deletedUser => {
    if(deletedUser) {
      res.json(deletedUser);
      res.status(204);
    }

  })
  .catch(next)
})

