import { Router } from 'express';
import apiHandler from '../modules/product/api-handler.js';

const router = Router();

router.get('/', apiHandler.getAllProduct);
router.get('/search', apiHandler.getAllProductPagination);
router.get('/:productId', apiHandler.getProductById);

router.post('/', apiHandler.addProduct);

router.put('/:productId', apiHandler.updateProduct);

router.delete('/', apiHandler.deleteProducts);
router.delete('/:productId', apiHandler.deleteProduct);

export default router;
