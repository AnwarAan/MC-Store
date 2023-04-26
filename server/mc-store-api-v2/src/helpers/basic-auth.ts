import { Request, Response, NextFunction } from "express";
import auth from "basic-auth";
import tryCatch from "../utils/try-catch.js";
import AppError from "../utils/app-error.js";

const basicAuth = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const user = auth(req);
  if (user?.name === process.env.BASIC_USER && user?.pass === process.env.BASIC_PASS) {
    return next();
  }
  throw new AppError("Username or Password not Match", 403);
});

export default basicAuth;
