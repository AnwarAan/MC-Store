import mongoose, { InferSchemaType } from 'mongoose';

const itemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
  price: { type: Number },
  quantity: { type: Number },
  total: { type: Number },
});

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  item: [itemSchema],
  subTotal: { type: Number },
});

type Cart = InferSchemaType<typeof cartSchema>;
const cart = mongoose.model('cart', cartSchema);

export default cart;
