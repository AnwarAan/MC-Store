import order from '../../models/order.js';

export default class Orders {
  async findOrder(params: any) {
    // const result = await order.find(params).populate('product');
    const result = await order.find().populate('product');
    return result;
  }

  async insertOneOrder(data: any) {
    const argument = new order(data);
    const result = await argument.save();
    return result;
  }

  async deleteManyOrder() {
    const result = await order.deleteMany();
    return result;
  }
}
