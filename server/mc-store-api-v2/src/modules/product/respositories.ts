import product from "../../models/product.js";

export default class Products {
  async findProduct(params: any) {
    const result = await product.findAll(params);
    return result;
  }

  async findAndCountAllProduct(query: any) {
    const result = await product.findAndCountAll(query);
    return result;
  }

  async insertProduct(data: any) {
    const result = await product.create(data);
    return result;
  }

  async updateProduct(data: any, params: any) {
    const result = await product.update(data, params);
    return result;
  }

  async deleteProduct(params: any) {
    const result = await product.destroy(params);
    return result;
  }
}
