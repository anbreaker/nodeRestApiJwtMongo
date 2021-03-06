'use strict';

import mongoose from 'mongoose';

const dbLink = process.env.MONGODB_URI;

mongoose
  .connect(dbLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log('DB is conneted an create on', db.connection.host))
  .catch((error) => console.error(error));

mongoose.connection.on('open', () => {
  console.log('Connected to MongoDB on', mongoose.connection.name);
});

mongoose.connection.on('error', (err) => {
  console.log('Error de conexión', err);
  process.exit(1);
});

module.exports = mongoose.connection;
