import joi from 'joi';

const checkCartId = joi.string().min(24).max(24).required();

const checkAddCart = joi.object({
  userId: joi.string().min(24).max(24).allow(),
  item: joi.array().items(
    joi.object({
      productId: joi.string(),
      quantity: joi.number(),
    })
  ),
});

const schema = { checkCartId, checkAddCart };

export default schema;
