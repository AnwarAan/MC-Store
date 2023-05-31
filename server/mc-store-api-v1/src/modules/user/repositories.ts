import user from '../../models/user.js';
import { User, UserUpdate } from '../../utils/interface.js';

export default class Users {
  async findUser(params: object) {
    const result = await user.find(params);
    return result;
  }

  async findAndCountAllUser(params: object, limit: number, page: number) {
    const count = await user.find(params).count();
    const rows = await user.find(params).limit(limit).skip(page);
    return { rows, count };
  }

  async insertOneUser(data: User) {
    const argument = new user(data);
    const result = await argument.save();
    return result;
  }

  async updateOneUser(params: object, data: UserUpdate) {
    const result = await user.updateOne(params, data);
    return result;
  }

  async deleteManyUser() {
    const result = await user.deleteMany();
    return result;
  }

  async deleteOneUser(userId: object) {
    const params = { _id: userId };
    const result = await user.deleteOne(params);
    return result;
  }
}
