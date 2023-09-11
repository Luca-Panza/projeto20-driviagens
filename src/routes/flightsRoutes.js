import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { flightsSchema } from "../schemas/flightsSchema.js";
import { flightsController } from "../controllers/flightsController.js";

const flightsRouter = Router();

flightsRouter.post("/flights", validateSchema(flightsSchema), flightsController.create);
flightsRouter.get("/flights", flightsController.read);

export default flightsRouter;
