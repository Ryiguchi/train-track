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
    failureRedirect: 'http://localhost:5173/google-failed',
  }),
  function (req, res) {
    res.redirect('http://localhost:5173/google-success');
  }
);

// SESSION

authRouter.post('/validateSession', validateSession);
