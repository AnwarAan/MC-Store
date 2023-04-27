import Joi from "joi";

const checkProductId = Joi.number().integer().min(1).required();

const checkAddProduct = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().integer().required(),
  category: Joi.string().valid("electronic", "food", "beverage", "fashion", "accessories"),
  stock: Joi.number().integer().required(),
  weight: Joi.number().integer().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
});

const checkUpdateProduct = Joi.object({
  title: Joi.string().allow(),
  price: Joi.number().integer().allow(),
  category: Joi.string().valid("electronic", "food", "beverage", "fashion", "accessories"),
  stock: Joi.number().integer().allow(),
  weight: Joi.number().integer().allow(),
  description: Joi.string().allow(),
  image: Joi.string().allow(),
});

const schema = { checkProductId, checkAddProduct, checkUpdateProduct };

export default schema;
