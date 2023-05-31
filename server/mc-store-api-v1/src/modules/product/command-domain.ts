import Products from './repositories.js';
import QueryProduct from './query-domain.js';
import { Product, ProductUpdate } from '../../utils/interface.js';

export default class CommandProduct {
  public product = new Products();
  public query = new QueryProduct();
  constructor() {
    this.product = new Products();
    this.query = new QueryProduct();
  }

  async addProduct(payload: Product) {
    const { name, price, description, stock, weight, image } = payload;
    const data = { name: name, price: price, description: description, stock: stock, weight: weight, image: image };
    await this.product.insertOneProduct(data);
  }

  async updateProduct(productId: string, payload: Product) {
    const params = { _id: productId };
    const { name, price, description, stock, weight, image } = payload;
    const getProduct = await this.query.getProductById(productId);
    let updateData: ProductUpdate = {};
    if (name !== getProduct[0].name) {
      updateData.name = name;
    }
    if (price !== getProduct[0].price) {
      updateData.price = price;
    }
    if (description !== getProduct[0].description) {
      updateData.description = description;
    }
    if (stock !== getProduct[0].stock) {
      updateData.stock = stock;
    }
    if (weight !== getProduct[0].weight) {
      updateData.weight = weight;
    }
    if (image !== getProduct[0].image) {
      updateData.image = image;
    }
    await this.product.updateOneProduct(params, updateData);
  }

  async deleteProducts() {
    await this.product.deleteManyProduct();
  }

  async deleteProduct(productId: string) {
    const params = { _id: productId };
    await this.product.deleteOneProduct(params);
  }
}
