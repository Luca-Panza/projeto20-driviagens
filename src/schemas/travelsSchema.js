import joi from "joi";

export const travelsSchema = joi.object({
  passengerId: joi.number().integer().positive().required(),
  flightId: joi.number().integer().positive().required(),
});
