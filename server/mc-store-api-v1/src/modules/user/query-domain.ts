import AppError from '../../utils/app-error.js';
import Users from './repositories.js';
import { UserPage } from '../../utils/interface.js';

export default class QueryUser {
  public user = new Users();
  constructor() {
    this.user = new Users();
  }

  async getUsers() {
    const params = {};
    const result = await this.user.findUser(params);
    if (result.length === 0) throw new AppError('Not Found', 404);
    return result;
  }

  async getUserPagination(payload: UserPage) {
    const { page, limit } = payload;
    let { name } = payload;
    const limitInt = Number(limit) || 10;
    const pageInt = Number(page) || 1;
    const pages = (pageInt - 1) * limitInt;
    let params = {};
    if (name !== undefined) {
      params = { name: { $regex: `.*${name}.*` } };
    }
    const result: any = await this.user.findAndCountAllUser(params, limitInt, pages);
    if (result.rows === 0) throw new AppError('Not Found', 404);
    const meta = {
      limit: limitInt,
      page: pageInt,
      totalData: result.count,
      totalPage: Math.ceil(result.count / limitInt),
    };
    const rows = result.rows;
    return { rows, meta };
  }

  async getUserById(userId: string) {
    const params = { _id: userId };
    const result = await this.user.findUser(params);
    if (result.length === 0) throw new AppError('Not Found', 404);
    return result;
  }

  async getUserByEmail(email: string) {
    const params = { email: email };
    const result = await this.user.findUser(params);
    return result;
  }
}
