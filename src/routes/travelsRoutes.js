import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { travelsSchema } from "../schemas/travelsSchema.js";
import { travelsController } from "../controllers/travelsController.js";

const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(travelsSchema), travelsController.create);

export default travelsRouter;
