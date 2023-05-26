import { Router } from 'express';
import apiHandler from '../modules/order/api-handler.js';

const router = Router();

router.get('/', apiHandler.getAllOrder);
router.post('/', apiHandler.addOrder);
router.delete('/', apiHandler.deleteAllOrder);

export default router;
