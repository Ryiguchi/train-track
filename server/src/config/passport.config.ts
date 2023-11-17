import passport from 'passport';
import { prisma } from './prisma.config';

import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { verifyPassword } from '../utils/bcryptjs.utils';
import { passportUserDataVerifier } from '../utils/zod.utils';

const callbackURL = `${
  process.env.NODE_ENV === 'development'
    ? process.env.BASE_URL_DEV
    : process.env.BASE_URL_PROD
}/auth/google/callback`;

export function passportConfig(passport: passport.PassportStatic) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        session: false,
      },
      async function verify(email, password, done) {
        try {
          const user: IUserWithIndex | null = await prisma.user.findUnique({
            where: { email },
          });

          if (!user) {
            return done(
              {
                message: 'No user exists with the provided email!',
                code: 404,
              },
              false
            );
          }

          const isPasswordValid = await verifyPassword(
            password,
            user.password!
          );

          if (!user.password || !isPasswordValid) {
            return done(
              {
                message: 'Invalid password!',
                code: 401,
              },
              false
            );
          }

          const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
          };

          return done(null, userData);
        } catch (error: any) {
          return done(
            {
              message: error.message || 'An error occurred!',
              code: error.statusCode || 500,
            },
            false
          );
        }
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.OAUTH_CLIENT_ID!,
        clientSecret: process.env.OAUTH_CLIENT_SECRET!,
        callbackURL: callbackURL,
      },
      async function (acessToken, refreshToken, profile, done) {
        try {
          // EXISTING USER
          const existingUser = await prisma.user.findUnique({
            where: { googleId: profile.id },
          });

          if (existingUser) {
            const userData = passportUserDataVerifier.parse(existingUser);
            return done(null, userData);
          }

          // NEW USER
          const newUserData = {
            name: profile.displayName,
            email: profile.emails ? profile.emails[0].value : null,
            googleId: profile.id,
          };

          const newUser = await prisma.user.create({ data: newUserData });
          const userData = passportUserDataVerifier.parse(newUser);

          return done(null, userData);
        } catch (error: any) {
          return done(error, false);
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    process.nextTick(function () {
      return done(null, user);
    });
  });

  passport.deserializeUser(function (id: number, done) {
    process.nextTick(function () {
      try {
        const user = prisma.user.findUnique({ where: { id } });
        return done(null, user);
      } catch (error: any) {
        return done(
          {
            message: error.message || 'An error occured!',
            code: error.statusCode || 500,
          },
          null
        );
      }
    });
  });
}
