import pgSession from 'connect-pg-simple';
import { Pool } from 'pg';
import session from 'express-session';

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });

const isCookieSecure = process.env.NODE_ENV === 'production';
const sameSite =
  process.env.NODE_ENV === 'production' ? ('none' as 'none') : false;
const domain =
  process.env.NODE_ENV === 'production' ? '.ryaniguchi.com' : 'localhost:3000';

export const sessionOptions = {
  store: new (pgSession(session))({
    pool,
    tableName: 'session',
    createTableIfMissing: true,
  }),
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: isCookieSecure,
    maxAge: 24 * 60 * 60 * 1000,
    // domain: domain,
    sameSite: sameSite,
    path: '/',
  },
};
