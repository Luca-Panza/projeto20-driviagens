import { db } from "../database/databaseConnection.js";

async function read(name) {
  return db.query(`SELECT * FROM cities WHERE name=$1`, [name]);
}

async function create(name) {
  return await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]);
}

export const citiesRepository = { read, create };
