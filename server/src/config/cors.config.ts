import { CorsOptions } from 'cors';

export const corsOptions: CorsOptions = {
  origin: [
    process.env.CLIENT_URL_DEV!,
    'http://localhost:3000/auth/google/callback',
    'http://localhost:8000/auth/google/callback',
    'https://hetzner-server.ryaniguchi.com/auth/google/callback',
    'https://accounts.google.com',
    'http://localhost:5173',
    'https://traintrack.ryaniguchi.com',
  ],
  credentials: true,
};
