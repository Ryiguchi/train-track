import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { yoga } from './config/graphql.config';

export const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(yoga.graphqlEndpoint, yoga);
app.use(bodyParser.json());
app.use(express.json({ limit: '10kb' }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
