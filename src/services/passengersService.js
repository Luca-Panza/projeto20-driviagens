import { passengersRepository } from "../repositories/passengersRepository.js";

async function create(firstName, lastName) {
  await passengersRepository.create(firstName, lastName);
}

export const passengersService = { create };
