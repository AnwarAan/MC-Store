import { Request, Response, NextFunction } from 'express';
import QueryProduct from './query-domain.js';
import CommandProduct from './command-domain.js';
import schema from './model-handler.js';
import tryCatch from '../../utils/try-catch.js';
import utils from '../../utils/utils.js';

const query = new QueryProduct();
const command = new CommandProduct();

const getAllProduct = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await query.getAllProduct();
  return utils.responseSuccess(res, response, 'Success Get Product');
});

const getAllProductPagination = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const payload: any = req.query;
  const response = await query.getAllProductPagination(payload);
  return utils.responseSuccess(res, response.rows, 'Success Get Product', 200, response.meta);
});

const getProductById = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.productId;
  await utils.validateSchema(params, schema.checkProductId);
  const response = await query.getProductById(params);
  return utils.responseSuccess(res, response, 'Success Get Product');
});

const addProduct = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.checkAddProduct);
  const response = await command.addProduct(payload);
  return utils.responseSuccess(res, response, 'Success Add Product', 201);
});

const updateProduct = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.productId;
  await utils.validateSchema(params, schema.checkProductId);
  const payload = req.body;
  await utils.validateSchema(payload, schema.checkAddProduct);
  const response = await command.updateProduct(params, payload);
  return utils.responseSuccess(res, response, 'Success Update Product');
});

const deleteProducts = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await command.deleteProducts();
  return utils.responseSuccess(res, response, 'Success Delete Product');
});

const deleteProduct = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.productId;
  await utils.validateSchema(params, schema.checkProductId);
  const response = await command.deleteProduct(params);
  return utils.responseSuccess(res, response, 'Success Delete Product');
});

export default {
  getAllProduct,
  getAllProductPagination,
  getProductById,
  addProduct,
  updateProduct,
  deleteProducts,
  deleteProduct,
};
