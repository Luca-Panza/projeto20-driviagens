import joi from "joi";

export const flightsSchema = joi.object({
  origin: joi.number().integer().positive().required(),
  destination: joi.number().integer().positive().required(),
  date: joi
    .string()
    .regex(/^\d{2}-\d{2}-\d{4}$/)
    .required(),
});
