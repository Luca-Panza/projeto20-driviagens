import { citiesRepository } from "../repositories/citiesRepository.js";
import { conflictError } from "../errors/errors.js";

async function create(name) {
  const cityQuery = await citiesRepository.search(name);
  if (cityQuery.rowCount > 0) throw conflictError("City");

  return citiesRepository.create(name);
}

export const citiesService = { create };
