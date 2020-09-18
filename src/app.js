import express from 'express';
import morgan from 'morgan';
import path from 'path';
import pkg from '../package.json';

// Import Routes
import productsRoutes from './routes/products.routes';

const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('pkg', pkg);

// Middleware
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.json({
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  });
});

// Routes
app.use('/products', productsRoutes);

export default app;
