const passport = require('passport');
const router = require('express').Router();
const FacebookStrategy = require('passport-facebook').Strategy;
const {User} = require('../db/models');
module.exports = router;

if (!process.env.FACEBOOK_CLIENT_ID || !process.env.FACEBOOK_CLIENT_SECRET) {

  console.log('FACEBOOK client ID / secret not found. Skipping FACEBOOK OAuth.')

} else {

  const facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK
    /* or, from secrets.js file */
  }


  const strategy = new FacebookStrategy(
    facebookConfig, (accessToken, refreshToken, profile, done) => {
      // probably will be useful...
      //console.log(profile)

      const facebookId = profile.id

      // might be different data from FB than the following (which works for Google):
      // const name = profile.displayName
      // const email = profile.emails[0].value

      User.find({where: {facebookId}})
        .then(foundUser => (foundUser
          ? done(null, foundUser)
          : User.create({name, email, facebookId})
            .then(createdUser => done(null, createdUser))
        ))
        .catch(done)
    }
  );

  passport.use(strategy);

  router.get('/', passport.authenticate('facebook', {/*scope: 'email'*/}));

  router.get('/callback', passport.authenticate('facebook', {
    successRedirect: '/home',
    failureRedirect: '/login'
  }));

}
