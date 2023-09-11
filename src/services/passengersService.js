import { passengersRepository } from "../repositories/passengersRepository.js";
import { internalServerError, badRequest } from "../errors/errors.js";

async function create(firstName, lastName) {
  await passengersRepository.create(firstName, lastName);
}

async function read(name, page = 1, pageSize = 10) {
  if (isNaN(page) || page < 1) throw badRequest("Invalid page value");

  const passengersTravels = await passengersRepository.read(name, page, pageSize);

  if (passengersTravels.rows.length > pageSize) throw internalServerError("Too many results");

  return passengersTravels.rows;
}

export const passengersService = { create, read };
