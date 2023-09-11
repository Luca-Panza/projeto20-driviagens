import { Router } from "express";
import citiesRouter from "./citiesRoutes.js";
import passengersRouter from "./passengersRoutes.js";
import flightsRouter from "./flightsRoutes.js";
import travelsRouter from "./travelsRoutes.js";

const indexRouter = Router();

indexRouter.use(citiesRouter);
indexRouter.use(passengersRouter);
indexRouter.use(flightsRouter);
indexRouter.use(travelsRouter);

export default indexRouter;
