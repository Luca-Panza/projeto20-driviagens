import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { citySchema } from "../schemas/citiesSchema.js";
import { citiesController } from "../controllers/citiesController.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(citySchema), citiesController.create);

export default citiesRouter;
