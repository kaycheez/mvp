import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middleware';
import { GroupRoutes } from './modules';

const app = express();

// Database

dbConfig();

// Middlewares

middlewaresConfig(app);

app.use('/api', [GroupRoutes]);

const PORT = process.env.PORT || 1177;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log( `Listening on ${PORT}`);
  }
});