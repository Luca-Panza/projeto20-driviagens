import httpStatus from "http-status";
import { flightsService } from "../services/flightsService.js";

async function create(req, res) {
  const { origin, destination, date } = req.body;

  await flightsService.create(origin, destination, date);

  return res.sendStatus(httpStatus.CREATED);
}

export const flightsController = { create };
