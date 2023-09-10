import { db } from "../database/databaseConnection.js";

async function create(firstName, lastName) {
  return await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName]);
}

export const passengersRepository = { create };
