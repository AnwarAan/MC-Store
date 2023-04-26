import { Request, Response, NextFunction } from "express";
import AppError from "./app-error.js";
import utils from "./utils.js";

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error instanceof AppError) {
    return utils.responseFail(res, error.message, error.statusCode);
  }
  return utils.responseFail(res, "Interval Server Error", 500);
};

export default errorHandler;
