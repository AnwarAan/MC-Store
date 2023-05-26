import joi from 'joi';

const checkProductId = joi.string().min(24).max(24).required();

const checkAddProduct = joi.object({
  name: joi.string(),
  price: joi.number(),
  description: joi.string(),
  stock: joi.number(),
  weight: joi.number(),
  image: joi.string(),
});

const schema = { checkProductId, checkAddProduct };

export default schema;
