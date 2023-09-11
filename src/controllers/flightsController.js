import httpStatus from "http-status";
import { flightsService } from "../services/flightsService.js";

async function create(req, res) {
  const { origin, destination, date } = req.body;

  await flightsService.create(origin, destination, date);

  return res.sendStatus(httpStatus.CREATED);
}

async function read(req, res) {
  const { origin, destination } = req.query;

  const biggerDate = req.query["bigger-date"];
  const smallerDate = req.query["smaller-date"];

  const flights = await flightsService.read(origin, destination, smallerDate, biggerDate);

  return res.status(httpStatus.OK).send(flights);
}

export const flightsController = { create, read };
