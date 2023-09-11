import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { flightsSchema } from "../schemas/flightsSchema.js";
import { flightsController } from "../controllers/flightsController.js";

const flightsRouter = Router();

flightsRouter.post("/flights", validateSchema(flightsSchema), flightsController.create);

export default flightsRouter;
