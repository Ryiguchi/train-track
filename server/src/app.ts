import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { yoga } from './config/graphql.config';
import { authRouter } from './routes/auth.router';
import cors from 'cors';
import { corsOptions } from './config/cors.config';
import passport from 'passport';
import { passportConfig } from './config/passport.config';
import session from 'express-session';
import { sessionOptions } from './config/express-session.config';
import { contextMiddleware } from './middleware/context.middleware';
import helmet from 'helmet';

passportConfig(passport);

export const app = express();

// if (process.env.NODE_ENV === 'development') {
const morganFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
app.use(morgan(morganFormat));
// }

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json({ limit: '10kb' }));
app.use(session(sessionOptions));

app.use(contextMiddleware);

app.use(yoga.graphqlEndpoint, yoga);

app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
