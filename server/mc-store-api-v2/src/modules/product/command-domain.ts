import Products from "./respositories.js";
import QueryProducts from "./query-domain.js";
import AppError from "../../utils/app-error.js";
import { Product, ProductUpdate } from "../../utils/interface.js";

export default class CommandProduct {
  public product = new Products();
  public query = new QueryProducts();
  constructor() {
    this.product = new Products();
    this.query = new QueryProducts();
  }

  async addProduct(payload: Product) {
    const { title, price, category, stock, weight, description, image } = payload;
    const productData = {
      title: title,
      price: price,
      category: category,
      stock: stock,
      weight: weight,
      description: description,
      image: image,
    };
    await this.product.insertProduct(productData);
  }

  async updateProduct(payload: Product, productId: string) {
    const params = { where: { product_id: productId } };
    const { title, price, category, stock, weight, description, image } = payload;
    const checkProduct: any = await this.query.getProductById(productId);
    const updateData = checkProduct.dataValues;
    let updateProduct: ProductUpdate = {};
    if (updateData.title !== title) {
      updateProduct.title = title;
    }
    if (updateData.price !== price) {
      updateProduct.price = price;
    }
    if (updateData.category !== category) {
      updateProduct.category = category;
    }
    if (updateData.stock !== stock) {
      updateProduct.stock = stock;
    }
    if (updateData.weight !== weight) {
      updateProduct.weight = weight;
    }
    if (updateData.description !== description) {
      updateProduct.description = description;
    }
    if (updateData.image !== image) {
      updateProduct.image = image;
    }
    await this.product.updateProduct(updateProduct, params);
  }

  async deleteProducts() {
    const params = { truncate: true };
    await this.product.deleteProduct(params);
  }

  async deleteProduct(productId: string) {
    const params = { where: { product_id: productId } };
    const data = await this.product.deleteProduct(params);
    if (data === 0) throw new AppError("Wrong Product Id", 403);
  }
}
