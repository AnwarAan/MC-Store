import Carts from './repositories.js';
import QueryCart from './query-domain.js';
import QueryProduct from '../product/query-domain.js';
import { Cart } from '../../utils/interface.js';

export default class CommandCart {
  public cart = new Carts();
  public query = new QueryCart();
  public queryProduct = new QueryProduct();
  constructor() {
    this.cart = new Carts();
    this.query = new QueryCart();
    this.queryProduct = new QueryProduct();
  }

  async addCart(payload: Cart) {
    const { productId } = payload.item[0];
    const { userId } = payload;
    const quantity: number = payload.item[0].quantity;
    const product: any = await this.queryProduct.getProductById(productId);
    const price = product[0].price;
    const quantityInt = Number(quantity);
    const total = price * quantityInt;
    let cart: any = await this.query.getCartByUserId(userId);
    if (cart.length !== 0) {
      const itemIndex = cart[0].item.findIndex((item: any) => item.product._id == productId);
      let item = cart[0].item[itemIndex];
      if (itemIndex !== -1) {
        if (item.quantity + quantity < 0) {
          cart[0].item.splice(itemIndex, 1);
          if (cart[0].item.length === 0) {
            cart[0].subTotal = 0;
          } else {
            cart[0].subtotal = cart[0].item.map((item: any) => item.total).reduce((a: number, b: number) => a + b);
          }
        } else {
          cart[0].item[itemIndex].price = price;
          cart[0].item[itemIndex].quantity = item.quantity + quantityInt;
          cart[0].item[itemIndex].total = item.price * item.quantity;
          cart[0].subTotal = cart[0].item.map((item: any) => item.total).reduce((a: number, b: number) => a + b);
        }
      } else {
        cart[0].item.push({
          product: productId,
          price: price,
          quantity: quantityInt,
          total: total,
        });
        cart[0].subTotal = price * quantity;
      }
      await cart[0].save();
    } else if (quantity > 0) {
      const data = {
        userId: userId,
        item: [
          {
            productId: productId,
            price: price,
            quantity: quantityInt,
            total: total,
          },
        ],
        subTotal: total,
      };
      await this.cart.insertOneCart(data);
    }
  }

  async deleteCart(cardId: string) {
    const params = { _id: cardId };
    await this.cart.deleteOneCart(params);
  }

  async deleteCarts() {
    await this.cart.deleteManyCart();
  }
}
