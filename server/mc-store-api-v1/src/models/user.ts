import mongoose, { InferSchemaType } from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  balance: { type: Number, require: true },
});

type User = InferSchemaType<typeof userSchema>;
const user = mongoose.model('user', userSchema);

export default user;
