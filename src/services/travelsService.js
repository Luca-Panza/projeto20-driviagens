import { travelsRepository } from "../repositories/travelsRepository.js";
import { notFoundError } from "../errors/errors.js";

async function create(passengerId, flightId) {
  const passengerIdQuery = await travelsRepository.searchPassengerId(passengerId);
  if (passengerIdQuery.rowCount === 0) throw notFoundError("passengerId");

  const flightIdQuery = await travelsRepository.searchFlightId(flightId);
  if (flightIdQuery.rowCount === 0) throw notFoundError("flightId");

  await travelsRepository.create(passengerId, flightId);
}

export const travelsService = { create };
