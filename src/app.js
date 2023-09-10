import express, { json } from "express";
import cors from "cors";
import indexRouter from "./routes/indexRoutes.js";
import "express-async-errors";
import errorHandler from "./middlewares/errorHandlerMiddleware.js";

const app = express();

app.use(cors());
app.use(json());
app.use(indexRouter);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Port:${port}/`));
