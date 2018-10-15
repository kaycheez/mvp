const mongoose = require('mongoose');

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/rotato', { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => console.log('mongo db running'))
    .on('error', err => console.error(err))
};