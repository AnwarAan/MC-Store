import { Request, Response, NextFunction } from 'express';
import AppError from './app-error.js';

const responseSuccess = (
  res: Response,
  data: any,
  message: string = 'Success',
  statusCode: number = 200,
  meta?: any
) => {
  const response = {
    status: true,
    statusCode,
    message,
    data,
    meta,
  };
  return res.status(statusCode).json(response);
};

const responseFail = (res: Response, message: string, statusCode: number) => {
  const response = {
    status: false,
    statusCode,
    message,
  };
  return res.status(statusCode).json(response);
};

const validateSchema = (payload: string, schema: any) => {
  const { value, error } = schema.validate(payload);
  if (error) throw new AppError(error.message, 400);
  return value;
};

export default { responseSuccess, responseFail, validateSchema };
