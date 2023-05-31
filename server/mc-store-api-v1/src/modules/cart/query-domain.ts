import Carts from './repositories.js';

export default class QueryCart {
  public cart = new Carts();
  constructor() {
    this.cart = new Carts();
  }

  async getAllCart() {
    const params = {};
    const result = await this.cart.findCart(params);
    return result;
  }

  async getCartByUserId(userId: string) {
    const params = { user: userId };
    const result = await this.cart.findCart(params);
    return result;
  }
}
