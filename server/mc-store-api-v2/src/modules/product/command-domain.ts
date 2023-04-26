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
    const { title, price, category, stock, weight, description, rating, image } = payload;
    const productData = {
      title: title,
      price: price,
      category: category,
      stock: stock,
      weight: weight,
      description: description,
      image: image,
    };
    console.log(productData);
    const data = await this.product.insertOneProduct(productData);
    return data;
  }

  async updateProduct(payload: Product, productId: string) {
    const params = { where: { product_id: productId } };
    const { title, price, category, description, image } = payload;
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
    if (updateData.description !== description) {
      updateProduct.description = description;
    }
    if (updateData.image !== image) {
      updateProduct.image = image;
    }
    console.log(updateProduct);
    await this.product.updateOneProduct(updateProduct, params);
    return updateProduct;
  }

  async deleteProducts() {
    const params = { truncate: true };
    const data = await this.product.deleteManyProduct(params);
    return data;
  }

  async deleteProduct(productId: string) {
    const params = { where: { product_id: productId } };
    const data = await this.product.deleteOneProduct(params);
    if (data === 0) throw new AppError("Wrong Product Id", 403);
    return data;
  }
}
