import product from "../../models/product.js";

export default class Products {
  async findManyProduct(params: any) {
    const result = await product.findAll(params);
    return result;
  }

  async findAndCountAllProduct(query: any) {
    const result = await product.findAndCountAll(query);
    return result;
  }

  async findOneProduct(params: any) {
    const result = await product.findOne();
    return result;
  }

  async insertOneProduct(data: any) {
    const result = await product.create(data);
    return result;
  }

  async updateOneProduct(data: any, params: any) {
    const result = await product.update(data, params);
    return result;
  }

  async deleteManyProduct(params: any) {
    const result = await product.destroy(params);
    return result;
  }

  async deleteOneProduct(params: any) {
    const result = await product.destroy(params);
    return result;
  }
}
