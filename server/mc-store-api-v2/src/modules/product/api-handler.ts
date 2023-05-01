import { Request, Response, NextFunction } from "express";
import QueryProducts from "./query-domain.js";
import CommandProduct from "./command-domain.js";
import tryCatch from "../../utils/try-catch.js";
import utils from "../../utils/utils.js";
import schema from "./model-handler.js";

const query = new QueryProducts();
const command = new CommandProduct();

const getProducts = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await query.getAllProduct();
  return utils.responseSuccess(res, response, "Success Get All Product");
});

const getProductPagination = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const search = req.query;
  const response = await query.getProductPagination(search);
  return utils.responseSuccess(res, response.row, "Success Get Product", 200, response.meta);
});

const getProductById = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.productId;
  await utils.validateSchema(params, schema.checkProductId);
  const response = await query.getProductById(params);
  console.log(req);
  return utils.responseSuccess(res, response, "Success Get Product");
});

const addProduct = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.checkAddProduct);
  const response = await command.addProduct(payload);
  return utils.responseSuccess(res, response, "Success Add Product", 201);
});

const updateProduct = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.productId;
  await utils.validateSchema(params, schema.checkProductId);
  const payload = req.body;
  await utils.validateSchema(payload, schema.checkUpdateProduct);
  const response = await command.updateProduct(payload, params);
  return utils.responseSuccess(res, response, "Success Update Product");
});

const deleteProducts = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await command.deleteProducts();
  return utils.responseSuccess(res, response, "Success Delete All Product");
});

const deleteProduct = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.productId;
  await utils.validateSchema(params, schema.checkProductId);
  const response = await command.deleteProduct(params);
  return utils.responseSuccess(res, response, "Success Delete Product");
});

export default {
  getProducts,
  getProductPagination,
  getProductById,
  addProduct,
  updateProduct,
  deleteProducts,
  deleteProduct,
};
