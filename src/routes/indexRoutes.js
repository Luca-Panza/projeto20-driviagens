import { Router } from "express";
import citiesRouter from "./citiesRoutes.js";
import passengersRouter from "./passengersRoutes.js";

const indexRouter = Router();

indexRouter.use(citiesRouter);
indexRouter.use(passengersRouter);

export default indexRouter;
