import bodyParser from 'body-parser';
import morgan from 'morgan';

export default app => {
  app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false}), morgan('dev'))
}