import express, { urlencoded, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongooseConnection from './src/config/db.js';

import errorHandler from './src/utils/error-handler.js';
import notFound from './src/utils/not-found.js';

//Routes
import userRoutes from './src/routes/user.js';
import productRoutes from './src/routes/product.js';
import orderRoutes from './src/routes/order.js';

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());
app.use(morgan('dev'));

//Connection DB
mongooseConnection();

//Routes
app.use('/v1/user', userRoutes);
app.use('/v1/product', productRoutes);
app.use('/v1/order', orderRoutes);

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`));
