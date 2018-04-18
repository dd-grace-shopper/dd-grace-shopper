const router = require('express').Router()

router.use('/google', require('./google'))
router.use('/facebook', require('./facebook'))
router.use('/local', require('./local'))

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

module.exports = router
