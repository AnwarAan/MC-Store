import AppError from "../../utils/app-error.js";
import Products from "./respositories.js";
import { Op } from "sequelize";

export default class QueryProducts {
  public product = new Products();
  constructor() {
    this.product = new Products();
  }

  async getAllProduct() {
    const params = {};
    const data = await this.product.findProduct(params);
    if (data.length === 0) throw new AppError("Product Empty", 404);
    return data;
  }

  async getProductPagination(query: any) {
    const { page, limit } = query;
    const { title } = query;
    const pageInt = parseInt(page) || 1;
    const limitInt = parseInt(limit) || 10;
    let params = {};
    if (title !== undefined) {
      params = { where: { title: { [Op.like]: `%${title}%` } }, offset: (pageInt - 1) * limitInt, limit: limitInt };
    } else {
      params = { offset: (pageInt - 1) * limitInt, limit: limitInt };
    }
    const data: any = await this.product.findAndCountAllProduct(params);
    if (data.length === 0) throw new AppError("Data Empty", 404);
    const meta = { page: pageInt, limit: limitInt, totalData: data.count, totalPage: Math.ceil(data.count / limitInt) };
    const row = data.rows;
    return { row, meta };
  }

  async getProductById(productId: string) {
    const params = { where: { product_id: productId } };
    const data = await this.product.findProduct(params);
    if (data.length === 0) throw new AppError("Product Not Found", 404);
    return data;
  }
}
