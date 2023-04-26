import { Request, Response } from "express";
import utils from "./utils.js";

const notFound = (req: Request, res: Response) => {
  return utils.responseFail(res, "User Not Found", 404);
};

export default notFound;
