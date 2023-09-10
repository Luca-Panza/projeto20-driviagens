import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { passengersSchema } from "../schemas/passengersSchema.js";
import { passengersController } from "../controllers/passengersController.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(passengersSchema), passengersController.create);

export default passengersRouter;
