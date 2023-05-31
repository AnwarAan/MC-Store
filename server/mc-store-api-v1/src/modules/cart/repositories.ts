import cart from '../../models/cart.js';
import { Cart } from '../../utils/interface.js';

export default class Carts {
  async findCart(params: object) {
    const result = await cart.find(params).populate({
      path: 'item.product',
    });
    return result;
  }

  async findOneCart(params: object) {
    const result = await cart
      .find(params)
      .populate({
        path: 'item.product',
      })
      .populate('user');
    return result;
  }

  async insertOneCart(data: Cart) {
    const argument = new cart(data);
    const result = await argument.save();
    return result;
  }

  async deleteManyCart() {
    const result = await cart.deleteMany();
    return result;
  }

  async deleteOneCart(params: object) {
    const result = await cart.deleteOne(params);
    return result;
  }
}
