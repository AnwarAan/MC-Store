import AppError from '../../utils/app-error.js';
import Products from './repositories.js';

export default class QueryProduct {
  public product = new Products();
  constructor() {
    this.product = new Products();
  }

  async getAllProduct() {
    const params = {};
    const result = await this.product.findProduct(params);
    if (result.length === 0) throw new AppError('Product not Found', 404);
    return result;
  }

  async getAllProductPagination(paylod: any) {
    const { page, limit } = paylod;
    let { name } = paylod;
    const limitInt = parseInt(limit) || 10;
    const pageInt = parseInt(page) | 1;
    const pages = (page - 1) * limitInt;
    let params = {};
    if (name !== undefined) {
      params = { name: { $regex: name, $options: 'i' } };
    }
    const result = await this.product.findAndCountAllProduct(params, limitInt, pages);
    if (result.rows.length === 0) throw new AppError('Product not Found', 404);
    const rows = result.rows;
    const meta = {
      limit: limitInt,
      page: pageInt,
      totalData: result.count,
      totalPage: Math.ceil(result.count / limitInt),
    };
    return { rows, meta };
  }
  async getProductById(userId: string) {
    const params = { _id: userId };
    const result = await this.product.findProduct(params);
    if (result.length === 0) throw new AppError('Product not Found', 404);
    return result;
  }
}
