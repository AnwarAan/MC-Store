import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError from "../utils/app-error.js";
import tryCatch from "../utils/try-catch.js";
import Users from "../modules/user/repositories.js";

const user = new Users();
const jwtAuth = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers;
  console.log(headers);
  if (headers && headers.authorization && headers.authorization.includes("Bearer")) {
    const parted = headers.authorization.split(" ")[1];
    if (parted) {
      const secret: any = process.env.SECRET_KEY;
      const decode: any = jwt.verify(parted, secret);
      const userData = await user.findUser({ user_id: decode.userId });
      if (userData) {
        return next();
      }
    }
    throw new AppError("Invalid Token", 403);
  }
  throw new AppError("Invalid Token", 403);
});

export default jwtAuth;
