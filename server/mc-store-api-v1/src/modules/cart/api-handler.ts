import { Request, Response, NextFunction } from 'express';
import tryCatch from '../../utils/try-catch.js';
import QueryCart from './query-domain.js';
import CommandCart from './command-domain.js';
import schema from './model-handler.js';
import utils from '../../utils/utils.js';

const query = new QueryCart();
const command = new CommandCart();

const getAllCart = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await query.getAllCart();
  return utils.responseSuccess(res, response, 'Success Get Cart');
});

const getCartByUserId = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.cartId;
  await utils.validateSchema(params, schema.checkCartId);
  const response = await query.getCartByUserId(params);
  return utils.responseSuccess(res, response, 'Success Get Cart');
});

const addCart = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.checkAddCart);
  const response = await command.addCart(payload);
  return utils.responseSuccess(res, response, 'Success Add Cart', 201);
});

const deleteCart = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.cartId;
  await utils.validateSchema(params, schema.checkCartId);
  const response = await command.deleteCart(params);
  return utils.responseSuccess(res, response, 'Success Delete Cart');
});

const deleteCarts = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await command.deleteCarts();
  return utils.responseSuccess(res, response, 'Success Delete Cart');
});

export default { getAllCart, getCartByUserId, addCart, deleteCart, deleteCarts };
