import { flightsRepository } from "../repositories/flightsRepository.js";
import { conflictError, notFoundError, unprocessableEntity, badRequest } from "../errors/errors.js";

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

async function read(originCity, destinationCity, smallerDate, biggerDate) {
  if ((smallerDate && !biggerDate) || (!smallerDate && biggerDate)) throw unprocessableEntity("smaller-date and bigger-date");

  let inputSmallerDate = null;
  let inputBiggerDate = null;

  if (smallerDate && biggerDate) {
    const smallerDateParts = smallerDate.split("-");
    inputSmallerDate = new Date(`${smallerDateParts[2]}-${smallerDateParts[1]}-${smallerDateParts[0]}`);

    const biggerDateParts = biggerDate.split("-");
    inputBiggerDate = new Date(`${biggerDateParts[2]}-${biggerDateParts[1]}-${biggerDateParts[0]}`);

    if (inputSmallerDate && inputBiggerDate && inputSmallerDate > inputBiggerDate) throw badRequest("smaller-date and bigger-date");
  }

  const data = await flightsRepository.read(originCity, destinationCity, smallerDate, biggerDate);

  return data.rows.map((flight) => {
    const flightDate = new Date(flight.date);
    const day = flightDate.getDate().toString().padStart(2, "0");
    const month = (flightDate.getMonth() + 1).toString().padStart(2, "0");
    const year = flightDate.getFullYear();

    return {
      id: flight.id,
      origin: flight.origin,
      destination: flight.destination,
      date: `${day}-${month}-${year}`,
    };
  });
}

export const flightsService = { create, read };
