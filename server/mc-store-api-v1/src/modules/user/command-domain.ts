import Users from './repositories.js';
import QueryUser from './query-domain.js';
import bcrypt from '../../helpers/bcrypt.js';
import jwt from 'jsonwebtoken';
import AppError from '../../utils/app-error.js';

export default class CommandUser {
  public user = new Users();
  public query = new QueryUser();
  constructor() {
    this.user = new Users();
    this.query = new QueryUser();
  }

  async register(payload: any) {
    const { name, email, password, balance } = payload;
    const validateEmail = email.toString();
    const getUser: any = await this.query.getUserByEmail(validateEmail);
    if (getUser.length !== 0) throw new AppError('Email has Already', 403);
    const hashPwd = await bcrypt.hash(password);
    const data = { name: name, email: email, password: hashPwd, balance: balance };
    await this.user.insertOneUser(data);
  }

  async login(payload: any) {
    const { email, password } = payload;
    const validateEmail = email.toLowerCase();
    const getUser: any = await this.query.getUserByEmail(validateEmail);
    if (getUser.length === 0) throw new AppError('Email not Found', 401);
    const checkPwd = await bcrypt.compare(password, getUser[0].password);
    if (!checkPwd) throw new AppError('Password not Match', 401);
    const data = { userId: getUser[0]._id };
    const token = jwt.sign(data, 'secret', { expiresIn: '1d' });
    const result = { _id: getUser[0]._id, token };
    return result;
  }

  async updateUser(userId: string, payload: any) {
    const { name, password, balance } = payload;
    const params = { _id: userId };
    const getUser: any = await this.query.getUserById(userId);
    let updateUser: any = {};
    if (name !== getUser[0].name) {
      updateUser.name = name;
    }
    if (balance !== getUser[0].email) {
      updateUser.balance = balance;
    }
    if (password !== getUser[0].email) {
      updateUser.password = password;
    }
    await this.user.updateOneUser(params, updateUser);
  }

  async deleteUsers() {
    await this.user.deleteManyUser();
  }

  async deleteUser(userId: string) {
    const params = { _id: userId };
    await this.user.deleteOneUser(params);
  }
}
