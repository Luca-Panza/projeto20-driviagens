import httpStatus from "http-status";
import { passengersService } from "../services/passengersService.js";

async function create(req, res) {
  const { firstName, lastName } = req.body;

  await passengersService.create(firstName, lastName);

  res.sendStatus(httpStatus.CREATED);
}

async function read(req, res) {
  const { name, page } = req.query;

  const passenger = await passengersService.read(name, page);

  return res.status(httpStatus.OK).send(passenger);
}

export const passengersController = { create, read };
