import { flightsRepository } from "../repositories/flightsRepository.js";
import { conflictError, notFoundError, unprocessableEntity } from "../errors/errors.js";

async function create(origin, destination, date) {
  if (origin === destination) throw conflictError("Origin and destination");

  const originQuery = await flightsRepository.search(origin);
  if (originQuery.rowCount === 0) throw notFoundError("Origin city");

  const destinationQuery = await flightsRepository.search(destination);
  if (destinationQuery.rowCount === 0) throw notFoundError("Destination city");

  let inputDate = null;
  const currentDate = new Date();
  const dateParts = date.split("-");
  inputDate = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
  const timeDifference = inputDate - currentDate;

  if (timeDifference <= 0) throw unprocessableEntity("Flight date");

  await flightsRepository.create(origin, destination, date);
}

export const flightsService = { create };
