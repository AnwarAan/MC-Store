import repositories from "./repositories.js";
import AppError from "../../utils/app-error.js";
import { Pagination } from "../../utils/interface.js";
import { Op } from "sequelize";

class QueryUserMongoose {
  public user = new repositories.UserMongoose();
  constructor() {
    this.user = new repositories.UserMongoose();
  }

  async getUsers() {
    const data = await this.user.findManyUser();
    if (data.length === 0) throw new AppError("Data Empty", 404);
    return data;
  }

  async getUserPagination(query: Pagination) {
    const { page, limit } = query;
    const pages = (page - 1) * limit;
    const { count, result } = await this.user.findAndCountAllUser(pages, limit);
    if (result.length === 0) throw new AppError("Data Empty", 404);
    const meta: any = { page: page, limit: limit, totalData: count, totalPage: Math.ceil(count / limit) };
    return { result, meta };
  }

  async getUserById(userId: string) {
    const params = { _id: userId };
    const data = await this.user.findOneUser(params);
    if (data.length === 0) throw new AppError("User Not Found", 404);
    return data;
  }

  async getUserByEmail(email: string) {
    const params = { email: email };
    const data = await this.user.findOneUser(params);
    return data;
  }
}

class QueryUserSequelize {
  public user = new repositories.UserSequelize();
  constructor() {
    this.user = new repositories.UserSequelize();
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
    console.log(name);
    console.log(params);
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

export default { QueryUserMongoose, QueryUserSequelize };
