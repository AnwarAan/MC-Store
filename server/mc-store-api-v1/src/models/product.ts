import mongoose, { InferSchemaType } from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  description: { type: String, require: true },
  stock: { type: Number },
  weight: { type: Number },
  image: { type: String },
});

type Product = InferSchemaType<typeof productSchema>;
const product = mongoose.model('product', productSchema);

export default product;
