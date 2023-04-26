import { Request, Response, NextFunction } from "express";
import tryCatch from "../../utils/try-catch.js";
import commandDomain from "./command-domain.js";
import queryDomain from "./query-domain.js";
import utils from "../../utils/utils.js";
import schema from "./model-mongoose.js";

const query = new queryDomain.QueryUserMongoose();
const command = new commandDomain.commandUserMongoose();

const getUsers = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await query.getUsers();
  return utils.responseSuccess(res, response, "Success Get All User");
});

const getUserPagination = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const page: any = req.query.page;
  const limit: any = req.query.limit;
  const payload = { page: parseInt(page) || 1, limit: parseInt(limit) || 10 };
  const response = await query.getUserPagination(payload);
  return utils.responseSuccess(res, response.result, "Success Get User", 200, response.meta);
});

const getUserById = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.userId;
  utils.validateSchema(params, schema.checkUserId);
  const response = await query.getUserById(params);
  return utils.responseSuccess(res, response, "Success Get User");
});

const registerUser = tryCatch(async (req: Request, res: Response) => {
  const payload = req.body;
  utils.validateSchema(payload, schema.checkRegisterUser);
  const response = await command.registerUser(payload);
  return utils.responseSuccess(res, response, "Success Register User", 201);
});

const loginUser = tryCatch(async (req: Request, res: Response) => {
  const payload = req.body;
  utils.validateSchema(payload, schema.checkLoginUser);
  const response = await command.loginUser(payload);
  return utils.responseSuccess(res, response, "Success Login!");
});

const updateUser = tryCatch(async (req: Request, res: Response) => {
  const params = req.params.userId;
  utils.validateSchema(params, schema.checkUserId);
  const payload = req.body;
  utils.validateSchema(payload, schema.checkUpdateUser);
  const response = await command.updateUser(params, payload);
  return utils.responseSuccess(res, response, "Success Update User");
});

const deleteUsers = tryCatch(async (req: Request, res: Response) => {
  const response = await command.deleteUsers();
  return utils.responseSuccess(res, response, "Success Delete All User");
});

const deleteUser = tryCatch(async (req: Request, res: Response) => {
  const params = req.params.userId;
  utils.validateSchema(params, schema.checkUserId);
  const response = await command.deleteUser(params);
  return utils.responseSuccess(res, response, "Success Delete User");
});

export default {
  getUsers,
  getUserPagination,
  getUserById,
  registerUser,
  loginUser,
  updateUser,
  deleteUsers,
  deleteUser,
};
