import product from '../../models/product.js';

export default class Products {
  async findProduct(params: any) {
    const result = await product.find(params);
    return result;
  }

  async findAndCountAllProduct(params: any, limit: number, page: number) {
    const count = await product.find(params).count();
    const rows = await product.find(params).limit(limit).skip(page);
    return { rows, count };
  }

  async insertOneProduct(data: any) {
    const argument = new product(data);
    const result = await argument.save();
    return result;
  }

  async updateOneProduct(params: any, data: any) {
    const result = await product.updateOne(params, data);
    return result;
  }

  async deleteManyProduct() {
    const result = await product.deleteMany();
    return result;
  }

  async deleteOneProduct(params: any) {
    const result = await product.deleteOne(params);
    return result;
  }
}
