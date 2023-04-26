import jwt from "jsonwebtoken";
import repositories from "./repositories.js";
import queryDomain from "./query-domain.js";
import hashing from "../../helpers/hashing.js";
import AppError from "../../utils/app-error.js";
import { UpdateUser, User, UserUpdate } from "../../utils/interface.js";
import e from "express";
import { string } from "joi";

class commandUserMongoose {
  public user = new repositories.UserMongoose();
  public query = new queryDomain.QueryUserMongoose();
  constructor() {
    this.user = new repositories.UserMongoose();
    this.query = new queryDomain.QueryUserMongoose();
  }

  async registerUser(payload: User) {
    const { name, email, password } = payload;
    const checkEmail = await this.query.getUserByEmail(email);
    if (checkEmail.length !== 0) throw new AppError("Email has Already", 403);
    const hashPassword = await hashing.hashingPassword(password);
    const userData = { name: name, email: email.toLowerCase(), password: hashPassword };
    const data = await this.user.insertOneUser(userData);
    return data;
  }

  async loginUser(payload: User) {
    const { email, password } = payload;
    const validateEmail = email.toLowerCase();
    const checkUser: any = await this.query.getUserByEmail(validateEmail);
    if (checkUser.length === 0) throw new AppError("Email not Found", 404);
    const checkPassword = await hashing.comparePassword(password, checkUser[0].password);
    if (!checkPassword) throw new AppError("Password not Match", 403);
    const data = {
      userId: checkUser[0]._id,
    };
    const secret: any = process.env.SECRET_KEY;
    const token = jwt.sign(data, secret, { expiresIn: "1h" });
    const responseData = { _id: checkUser[0]._id, name: checkUser[0].name, email: checkUser[0].email, token };
    return responseData;
  }

  async updateUser(userId: string, payload: UserUpdate) {
    const params = { _id: userId };
    const { name, password } = payload;
    const getUser: any = await this.query.getUserById(userId);
    const user = getUser[0];
    const newPassword = await hashing.hashingPassword(password);
    let updateUser: UpdateUser = {};
    if (user.name !== name) {
      updateUser.name = name;
    }
    if (user.password !== password) {
      updateUser.password = newPassword;
    }
    await this.user.updateOneUser(params, updateUser);
    return updateUser;
  }

  async deleteUsers() {
    const data = await this.user.deleteManyUser();
    return data;
  }

  async deleteUser(userId: string) {
    const params = { _id: userId };
    const result = await this.user.deleteOneUser(params);
    return result;
  }
}

export interface UserSequelize {
  name: string;
  email: string;
  password: string;
  new_password: string;
  balance: number;
}

class commadnUserSequelize {
  public user = new repositories.UserSequelize();
  public query = new queryDomain.QueryUserSequelize();
  constructor() {
    this.user = new repositories.UserSequelize();
    this.query = new queryDomain.QueryUserSequelize();
  }

  async registerUser(payload: UserSequelize) {
    const { name, email, password, balance } = payload;
    const checkEmail = await this.query.getUserByEmail(email);
    console.log(checkEmail);
    if (checkEmail.length !== 0) throw new AppError("Email has Already", 403);
    const hashPassword = await hashing.hashingPassword(password);
    const userData = { name: name, email: email, password: hashPassword, balance: balance };
    const data = await this.user.insertOneUser(userData);
    return data;
  }

  async loginUser(payload: UserSequelize) {
    const { email, password } = payload;
    const validateEmail = email.toLowerCase();
    const checkUser: any = await this.query.getUserByEmail(validateEmail);
    const userData = checkUser[0].dataValues;
    if (checkUser === null) throw new AppError("Email not Found", 403);
    const checkPassword = await hashing.comparePassword(password, userData.password);
    if (!checkPassword) throw new AppError("Password not Match", 403);
    const data = {
      userId: userData.user_id,
    };
    console.log(data);
    const secret: any = process.env.SECRET_KEY;
    const token = jwt.sign(data, secret, { expiresIn: "1h" });
    const responseData = {
      user_id: userData.user_id,
      name: userData.name,
      email: userData.email,
      token,
    };
    return responseData;
  }

  async updateUser(payload: UserSequelize, userId: string) {
    const { name, password, new_password, balance } = payload;
    const params = { where: { user_id: userId } };
    const getUser: any = await this.query.getUserById(userId);
    console.log(payload);
    const userData = getUser[0].dataValues;
    let updateData: any = {};
    if (userData.name !== name) {
      updateData.name = name;
    }
    if (userData.balance !== balance) {
      updateData.balance = balance;
    }
    if (password) {
      if (!new_password) throw new AppError("Need New Password", 403);
      console.log(getUser.password);
      const checkPassword = await hashing.comparePassword(password, userData.password);
      if (!checkPassword) throw new AppError("Password not Match", 403);
      if (password !== new_password) {
        const newPwd = await hashing.hashingPassword(new_password);
        updateData.password = newPwd;
      }
    }
    await this.user.updateOneUser(updateData, params);
    return updateData;
  }

  async deleteUsers() {
    const params = { truncate: true };
    const data = await this.user.deleteUser(params);
    console.log(data);
    return data;
  }

  async deletOneUser(userId: string) {
    const params = { where: { user_id: userId } };
    const data = await this.user.deleteUser(params);
    if (data === 0) throw new AppError("User not Found", 404);
    return data;
  }
}
export default { commandUserMongoose, commadnUserSequelize };
