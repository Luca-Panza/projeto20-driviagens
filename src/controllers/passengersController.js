import httpStatus from "http-status";
import { passengersService } from "../services/passengersService.js";

async function create(req, res) {
  const { firstName, lastName } = req.body;

  await passengersService.create(firstName, lastName);

  res.sendStatus(httpStatus.CREATED);
}

export const passengersController = { create };
