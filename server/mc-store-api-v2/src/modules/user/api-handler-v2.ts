import { Request, Response, NextFunction } from "express";
import tryCatch from "../../utils/try-catch.js";
import utils from "../../utils/utils.js";
import queryDomain from "./query-domain.js";
import commandDomain from "./command-domain.js";
import schema from "./model-sequelize.js";

const query = new queryDomain.QueryUserSequelize();
const command = new commandDomain.commadnUserSequelize();

const getUsers = tryCatch(async (req: Request, res: Response) => {
  const response = await query.getUsers();
  return utils.responseSuccess(res, response, "Success Get User");
});

const getUserPagination = tryCatch(async (req: Request, res: Response) => {
  const payload = req.query;
  const response = await query.getUserPagination(payload);
  return utils.responseSuccess(res, response.row, "Success Get User", 200, response.meta);
});

const getUserById = tryCatch(async (req: Request, res: Response) => {
  const params = req.params.userId;
  await utils.validateSchema(params, schema.checkuserId);
  const response = await query.getUserById(params);
  return utils.responseSuccess(res, response, "Success Get User");
});

const registerUser = tryCatch(async (req: Request, res: Response) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.checkRegisterUser);
  const response = await command.registerUser(payload);
  return utils.responseSuccess(res, response, "Success Register User", 201);
});

const loginUser = tryCatch(async (req: Request, res: Response) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.checkLoginUser);
  const response = await command.loginUser(payload);
  return utils.responseSuccess(res, response, "Success Login!");
});

const updateUser = tryCatch(async (req: Request, res: Response) => {
  const params = req.params.userId;
  await utils.validateSchema(params, schema.checkuserId);
  const payload = req.body;
  await utils.validateSchema(payload, schema.checkUpdateUser);
  const response = await command.updateUser(payload, params);
  return utils.responseSuccess(res, response, "Success Update User");
});

const deleteUsers = tryCatch(async (req: Request, res: Response) => {
  const response = await command.deleteUsers();
  return utils.responseSuccess(res, response, "Success Delete All User");
});

const deleteUser = tryCatch(async (req: Request, res: Response) => {
  const params = req.params.userId;
  await utils.validateSchema(params, schema.checkuserId);
  const response = await command.deletOneUser(params);
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
