import Users from "./repositories.js";
import AppError from "../../utils/app-error.js";
import { Op } from "sequelize";

export default class QueryUser {
  public user = new Users();
  constructor() {
    this.user = new Users();
  }

  async getUsers() {
    const params = {};
    const data = await this.user.findUser(params);
    if (data.length === 0) throw new AppError("Data Empty", 404);
    return data;
  }

  async getUserPagination(query: any) {
    const { page, limit } = query;
    const { name } = query;
    const pageInt = parseInt(page) || 1;
    const limitInt = parseInt(limit) || 10;
    let params = {};
    if (name !== undefined) {
      params = { where: { name: { [Op.like]: `%${name}%` } }, offset: (pageInt - 1) * limitInt, limit: limit };
    } else {
      params = { offset: (pageInt - 1) * limitInt, limit: limit };
    }
    const data = await this.user.findAndCountAllUser(params);
    if (data.rows.length === 0) throw new AppError("User not Found", 404);
    const row = data.rows;
    const meta = {
      page: pageInt,
      limit: limitInt,
      totalData: data.count,
      totalPage: Math.ceil(data.count / limitInt),
    };
    return { row, meta };
  }

  async getUserById(userId: string) {
    const params = { where: { user_id: userId } };
    const data = await this.user.findUser(params);
    if (data.length === 0) throw new AppError("User not Found", 404);
    return data;
  }

  async getUserByEmail(email: string) {
    const params = { where: { email: email } };
    const data = await this.user.findUser(params);
    return data;
  }
}
