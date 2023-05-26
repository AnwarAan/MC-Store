import { Request, Response, NextFunction } from 'express';
import tryCatch from '../../utils/try-catch.js';
import QueryUser from './query-domain.js';
import CommandUser from './command-domain.js';
import schema from './model-handler.js';
import utils from '../../utils/utils.js';

const query = new QueryUser();
const command = new CommandUser();

const getAllUser = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await query.getUsers();
  return utils.responseSuccess(res, response, 'Success Get User');
});

const getAllUserPagination = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.query;
  const response = await query.getUserPagination(payload);
  return utils.responseSuccess(res, response.rows, 'Success Get User', 200, response.meta);
});

const getUserById = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.userId;
  await utils.validateSchema(params, schema.checkUserId);
  const response = await query.getUserById(params);
  return utils.responseSuccess(res, response, 'Success Get User');
});

const register = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.checkRegister);
  const response = await command.register(payload);
  return utils.responseSuccess(res, response, 'Success Register', 201);
});

const login = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body;
  await utils.validateSchema(payload, schema.checkLogin);
  const response = await command.login(payload);
  return utils.responseSuccess(res, response, 'Success Login');
});

const updateUser = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.userId;
  await utils.validateSchema(params, schema.checkUserId);
  const payload = req.body;
  await utils.validateSchema(payload, schema.checkUpdate);
  const response = await command.updateUser(params, payload);
  return utils.responseSuccess(res, response, 'Success Update User');
});

const deleteAllUser = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const response = await command.deleteUsers();
  return utils.responseSuccess(res, response, 'Success Delete User');
});

const deletUserById = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const params = req.params.userId;
  await utils.validateSchema(params, schema.checkUserId);
  const response = await command.deleteUser(params);
  return utils.responseSuccess(res, response, 'Success Delete User');
});

export default {
  getAllUser,
  getAllUserPagination,
  getUserById,
  register,
  login,
  updateUser,
  deleteAllUser,
  deletUserById,
};
