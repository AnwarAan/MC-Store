import user from "../../models/user.js";
import { UpdateUser, User } from "../../utils/interface.js";

class UserMongoose {
  async findManyUser() {
    const result = await user.userMongoose.find();
    return result;
  }

  async findOneUser(params: any) {
    const result = await user.userMongoose.find(params);
    return result;
  }

  async findAndCountAllUser(page: number, limit: number) {
    const count = await user.userMongoose.find().count();
    const result = await user.userMongoose.find().skip(page).limit(limit);
    return { count, result };
  }

  async insertOneUser(data: User) {
    const argument = new user.userMongoose(data);
    const result = await argument.save();
    return result;
  }

  async updateOneUser(params: any, data: UpdateUser) {
    const result = await user.userMongoose.updateOne(params, data);
    return result;
  }

  async deleteManyUser() {
    const result = await user.userMongoose.deleteMany();
    return result;
  }

  async deleteOneUser(params: any) {
    const result = await user.userMongoose.deleteOne(params);
    return result;
  }
}

class UserSequelize {
  async findUser(params: any) {
    const result = await user.userSequelize.findAll(params);
    return result;
  }

  async findAndCountAllUser(query: any) {
    const result = await user.userSequelize.findAndCountAll(query);
    return result;
  }

  async insertOneUser(data: any) {
    const result = await user.userSequelize.create(data);
    return result;
  }

  async updateOneUser(data: any, params: any) {
    const result = await user.userSequelize.update(data, params);
    return result;
  }

  async deleteUser(params: any) {
    const result = await user.userSequelize.destroy(params);
    return result;
  }
}

export default { UserMongoose, UserSequelize };
