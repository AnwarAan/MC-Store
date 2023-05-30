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

  async getCartByUserId(payload: any) {
    const { userId } = payload;
    const params = { userId: userId };
    const result = await this.cart.findCart(params);
    return result;
  }
}
