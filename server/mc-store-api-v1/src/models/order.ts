import mongoose, { InferSchemaType } from 'mongoose';

const orderSchema = new mongoose.Schema({
  order_number: { type: Number },
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
});

type Order = InferSchemaType<typeof orderSchema>;
const order = mongoose.model('order', orderSchema);

export default order;
