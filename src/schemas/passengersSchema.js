import Joi from "joi";

export const passengersSchema = Joi.object({
  firstName: Joi.string().min(2).max(100).trim().required(),
  lastName: Joi.string().min(2).max(100).trim().required(),
});
