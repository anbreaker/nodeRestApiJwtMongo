'use strict';
import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

import {createRoles} from './libs/initialSetup';

// To use more secure environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Import Routes
import productsRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import usersRoutes from './routes/user.routes';

const app = express();
createRoles();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('pkg', pkg);

// Middleware
app.use(morgan('dev'));

// Config Express Data
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  });
});

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

export default app;
