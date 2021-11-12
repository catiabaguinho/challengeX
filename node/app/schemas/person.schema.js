const Joi = require('joi');



const id = Joi.string();
const first_name=Joi.string().max(50);
const last_name=Joi.string().max(50);
const company_name=Joi.string().max(50);
const address=Joi.string().max(50);
const city=Joi.string().max(50);
const state=Joi.string().max(2);
const zip=Joi.string().max(10);
const phone1=Joi.string().max(10);
const phone2=Joi.string().max(10);
const email=Joi.string().email();
const department=Joi.string().max(50);



const createPersonSchema = Joi.object({
  email: email.required(),
});

const updatePersonSchema = Joi.object({
  email: email,
  phone1: phone1,
  phone2: phone2
});

const getPersonSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPersonSchema, updatePersonSchema, getPersonSchema}
