import express from 'express';
import passport from 'passport';
import {
  signin,
  signout,
  signup,
  validateSession,
} from '../controllers/auth.controller';

export const authRouter = express.Router();

authRouter.post('/signin', signin);

authRouter.post('/signup', signup);

authRouter.post('/signout', signout);

// GOOGLE
authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['profile'] })
);

authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${
      process.env.NODE_ENV === 'development'
        ? process.env.CLIENT_URL_DEV
        : process.env.CLIENT_URL_PROD
    }/google-failed`,
  }),
  function (req, res) {
    res.redirect(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.CLIENT_URL_DEV
          : process.env.CLIENT_URL_PROD
      }/google-success`
    );
  }
);

// SESSION

authRouter.post('/validateSession', validateSession);
