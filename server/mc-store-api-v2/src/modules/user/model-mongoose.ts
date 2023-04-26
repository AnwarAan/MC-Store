import Joi from "joi";

const checkUserId = Joi.string().min(24).max(24).required();

const checkRegisterUser = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 1, tlds: { allow: ["com"] } })
    .required(),
  password: Joi.string().min(6).required(),
});

const checkLoginUser = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 1, tlds: { allow: ["com"] } })
    .required(),
  password: Joi.string().min(6).required(),
});

const checkUpdateUser = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const schema = { checkUserId, checkRegisterUser, checkLoginUser, checkUpdateUser };

export default schema;
