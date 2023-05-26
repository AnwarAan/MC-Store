import { Request, Response, NextFunction } from 'express';
import utils from './utils.js';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return utils.responseFail(res, 'Not Found', 404);
};

export default notFound;
