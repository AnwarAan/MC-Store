import { Router } from 'express';
import apiHandler from '../modules/cart/api-handler.js';

const router = Router();

router.get('/', apiHandler.getAllCart);
router.get('/:cartId', apiHandler.getCartByUserId);

router.post('/', apiHandler.addCart);

router.delete('/:cartId', apiHandler.deleteCart);
router.delete('/', apiHandler.deleteCarts);

export default router;
