import { Request, Response, NextFunction } from "express";
import cart from "../../models/cart.js";
import tryCatch from "../../utils/try-catch.js";
import utils from "../../utils/utils.js";

const getCart = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const result = await cart.findAll();
  console.log(result);
  return utils.responseSuccess(res, result);
});

const addCart = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const { name, userId, productId } = req.body;
  const result = await cart.create({ name: name, user_id: userId, product_id: productId });
  console.log(result);
  return utils.responseSuccess(res, result);
});

const deleteCart = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const result = await cart.destroy({ truncate: true });
  console.log(result);
  return utils.responseSuccess(res, result);
});

export default { getCart, addCart, deleteCart };
