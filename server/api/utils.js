function requireAdmin (req, res, next) {
  if (req.user.isAdmin) {
    next();
  } else {
    res.sendStatus(401);
  }
}

function isAdminOrSelf (req, res, next) {
  if (req.user.isAdmin || req.user.id === +req.params.id) {
    next();
  } else {
    res.sendStatus(401);
  }
}

function requireLoggedInUser (req, res, next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

module.exports = {
  requireAdmin,
  isAdminOrSelf,
  requireLoggedInUser
}
