import { Request, Response, NextFunction } from 'express';
import tryCatch from '../../utils/try-catch.js';
import QueryCart from './query-domain.js';
import CommandCart from './command-domain.js';
import utils from '../../utils/utils.js';

const query = new QueryCart();
const command = new CommandCart();

const getAllCart = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await query.getAllCart();
  return utils.responseSuccess(res, response, 'Success Get Cart');
});

const getCartByUserId = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  const response = await query.getCartByUserId(payload);
  return utils.responseSuccess(res, response, 'Success Get Cart');
});

const addCart = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  const response = await command.addCart(payload);
  return utils.responseSuccess(res, response, 'Success Add Cart', 201);
});

const deleteCart = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.cartId;
  const response = await command.deleteCartById(params);
  return utils.responseSuccess(res, response, 'Success Delete Cart');
});

const deleteCarts = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await command.deleteAllCart();
  return utils.responseSuccess(res, response, 'Success Delete Cart');
});

export default { getAllCart, getCartByUserId, addCart, deleteCart, deleteCarts };
