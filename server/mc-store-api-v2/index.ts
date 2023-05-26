import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Middleware
import postgresConnection from './src/config/db.js';
import errorHandler from './src/utils/error-handler.js';
import notFound from './src/utils/not-found.js';

//Router
import userRoutes from './src/routes/user.js';
import productRoutes from './src/routes/product.js';
import cartRouter from './src/routes/cart.js';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

postgresConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(morgan('dev'));
app.use(cors());

//Router
app.use('/v2/user', userRoutes);
app.use('/v2/product', productRoutes);
app.use('/v2/cart', cartRouter);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is Running on PORT:${PORT}`);
});
