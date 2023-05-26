import { Request, Response, NextFunction } from 'express';
import Orders from './repositories.js';
import utils from '../../utils/utils.js';
import tryCatch from '../../utils/try-catch.js';

const order = new Orders();

const getAllOrder = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const productId = req.params.productId;
  const params = { product: productId };
  const response = await order.findOrder(params);
  return utils.responseSuccess(res, response);
});

const addOrder = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const { productId, orderNumber } = req.body;
  const data = { product: productId, order_number: orderNumber };
  const response = await order.insertOneOrder(data);
  return utils.responseSuccess(res, response);
});

const deleteAllOrder = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await order.deleteManyOrder();
  return utils.responseSuccess(res, response);
});

export default { getAllOrder, addOrder, deleteAllOrder };
