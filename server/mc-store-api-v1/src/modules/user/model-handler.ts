import joi from 'joi';

const checkUserId = joi.string().min(24).max(24);

const checkRegister = joi.object({
  name: joi.string().required(),
  email: joi
    .string()
    .email({ minDomainSegments: 1, tlds: { allow: ['com'] } })
    .required(),
  password: joi.string().min(6).required(),
  balance: joi.number().allow(),
});

const checkLogin = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 1, tlds: { allow: ['com'] } })
    .required(),
  password: joi.string().min(6).required(),
});

const checkUpdate = joi.object({
  name: joi.string().allow(),
  password: joi.string().min(6).allow(),
  balance: joi.number().allow(),
});

const schema = { checkUserId, checkRegister, checkLogin, checkUpdate };

export default schema;
