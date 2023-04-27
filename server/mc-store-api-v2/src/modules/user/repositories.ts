import user from "../../models/user.js";

export default class Users {
  async findUser(params: any) {
    const result = await user.findAll(params);
    return result;
  }

  async findAndCountAllUser(query: any) {
    const result = await user.findAndCountAll(query);
    return result;
  }

  async insertOneUser(data: any) {
    const result = await user.create(data);
    return result;
  }

  async updateOneUser(data: any, params: any) {
    const result = await user.update(data, params);
    return result;
  }

  async deleteUser(params: any) {
    const result = await user.destroy(params);
    return result;
  }
}
