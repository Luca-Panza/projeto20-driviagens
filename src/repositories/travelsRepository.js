import { db } from "../database/databaseConnection.js";

async function searchPassengerId(passengerId) {
  return db.query(`SELECT * FROM passengers WHERE id=$1`, [passengerId]);
}

async function searchFlightId(flightId) {
  return db.query(`SELECT * FROM flights WHERE id=$1`, [flightId]);
}

async function create(passengerId, flightId) {
  return await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`, [passengerId, flightId]);
}

export const travelsRepository = { searchPassengerId, searchFlightId, create };
