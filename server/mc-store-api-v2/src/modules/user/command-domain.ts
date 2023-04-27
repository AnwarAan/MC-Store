import jwt from "jsonwebtoken";
import Users from "./repositories.js";
import QueryUser from "./query-domain.js";
import bcrypt from "../../helpers/bcrypt.js";
import AppError from "../../utils/app-error.js";
import { User } from "../../utils/interface.js";

export default class CommandUser {
  public user = new Users();
  public query = new QueryUser();
  constructor() {
    this.user = new Users();
    this.query = new QueryUser();
  }

  async registerUser(payload: User) {
    const { name, email, password, balance } = payload;
    const checkEmail = await this.query.getUserByEmail(email);
    console.log(checkEmail);
    if (checkEmail.length !== 0) throw new AppError("Email has Already", 403);
    const hashPassword = await bcrypt.hashingPassword(password);
    const userData = { name: name, email: email, password: hashPassword, balance: balance };
    await this.user.insertOneUser(userData);
  }

  async loginUser(payload: User) {
    const { email, password } = payload;
    const validateEmail = email.toLowerCase();
    const checkUser: any = await this.query.getUserByEmail(validateEmail);
    const userData = checkUser[0].dataValues;
    if (checkUser === null) throw new AppError("Email not Found", 403);
    const checkPassword = await bcrypt.comparePassword(password, userData.password);
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

  async updateUser(payload: User, userId: string) {
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
      const checkPassword = await bcrypt.comparePassword(password, userData.password);
      if (!checkPassword) throw new AppError("Password not Match", 403);
      if (!new_password) throw new AppError("Need New Password", 403);
      if (password === new_password) throw new AppError("Password Must Different", 403);
      if (password !== new_password) {
        const newPwd = await bcrypt.hashingPassword(new_password);
        updateData.password = newPwd;
      }
    }
    await this.user.updateOneUser(updateData, params);
  }

  async deleteUsers() {
    const params = { truncate: true };
    const data = await this.user.deleteUser(params);
    console.log(data);
  }

  async deletOneUser(userId: string) {
    const params = { where: { user_id: userId } };
    const data = await this.user.deleteUser(params);
    if (data === 0) throw new AppError("User not Found", 404);
  }
}
