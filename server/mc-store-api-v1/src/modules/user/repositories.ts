import user from '../../models/user.js';

export default class Users {
  async findUser(params: any) {
    const result = await user.find(params);
    return result;
  }

  async findAndCountAllUser(params: any, limit: number, page: number) {
    const count = await user.find(params).count();
    const rows = await user.find(params).limit(limit).skip(page);
    return { rows, count };
  }

  async insertOneUser(data: any) {
    const argument = new user(data);
    const result = await argument.save();
    return result;
  }

  async updateOneUser(params: any, data: any) {
    const result = await user.updateOne(params, data);
    return result;
  }

  async deleteManyUser() {
    const result = await user.deleteMany();
    return result;
  }

  async deleteOneUser(userId: any) {
    const params = { _id: userId };
    const result = await user.deleteOne(params);
    return result;
  }
}
