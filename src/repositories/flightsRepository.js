import { db } from "../database/databaseConnection.js";

async function search(locations) {
  return db.query(`SELECT * FROM cities WHERE id=$1`, [locations]);
}

async function create(origin, destination, date) {
  return await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, [origin, destination, date]);
}

async function read(originCity, destinationCity, smallerDate, biggerDate) {
  let query = `SELECT
    flight.id,
    city1.name AS origin,
    city2.name AS destination,
    flight.date
  FROM
    flights AS flight
  JOIN
    cities AS city1 ON flight.origin = city1.id
  JOIN
    cities AS city2 ON flight.destination = city2.id`;

  const queryParams = [];

  if (originCity) {
    query += ` WHERE city1.name = $1`;
    queryParams.push(originCity);
  }

  if (destinationCity) {
    query += originCity ? ` AND city2.name = $${queryParams.length + 1}` : ` WHERE city2.name = $1`;
    queryParams.push(destinationCity);
  }

  if (smallerDate && biggerDate) {
    query += ` AND flight.date >= $${queryParams.length + 1} AND flight.date <= $${queryParams.length + 2}`;
    queryParams.push(smallerDate, biggerDate);
  }

  query += ` ORDER BY flight.date;`;

  return await db.query(query, queryParams);
}

export const flightsRepository = { search, create, read };
