import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import repositories from "../modules/user/repositories.js";
import AppError from "../utils/app-error.js";
import tryCatch from "../utils/try-catch.js";

const user = new repositories.UserMongoose();
const jwtAuth = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers;
  if (headers && headers.authorization && headers.authorization.includes("Bearer")) {
    const parted = headers.authorization.split(" ")[1];
    if (parted.length !== 176) throw new AppError("Invalid Token", 403);
    if (parted) {
      const secret: any = process.env.SECRET_KEY;
      const decode: any = jwt.verify(parted, secret);
      const userData = await user.findOneUser({ _id: decode.userId });
      if (userData) {
        return next();
      }
    }
  }
  throw new AppError("Invalid Token", 403);
});

export default jwtAuth;
