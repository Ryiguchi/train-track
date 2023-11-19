import { CorsOptions } from 'cors';

export const corsOptions: CorsOptions = {
  origin: [
    process.env.CLIENT_URL_DEV!,
    'http://localhost:3000',
    'http://localhost:8000',
    'https://hetzner-server.ryaniguchi.com',
    'https://accounts.google.com',
    'http://localhost:5173',
    'http://localhost:5174',
    'https://www.traintrack.ryaniguchi.com',
    'https://traintrack.ryaniguchi.com',
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
};
