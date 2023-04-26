import Joi from "joi";

const checkuserId = Joi.number().integer().min(1).required();

const checkRegisterUser = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 1, tlds: { allow: ["com"] } })
    .required(),
  password: Joi.string().min(6).required(),
  balance: Joi.number().allow(),
});

const checkLoginUser = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 1, tlds: { allow: ["com"] } })
    .required(),
  password: Joi.string().min(6).required(),
});

const checkUpdateUser = Joi.object({
  name: Joi.string().allow(),
  password: Joi.string().min(6).allow(),
  new_password: Joi.string().min(6).allow(),
  balance: Joi.number().allow(),
});

const schema = {
  checkuserId,
  checkRegisterUser,
  checkLoginUser,
  checkUpdateUser,
};

export default schema;
