import { db } from "../database/databaseConnection.js";

async function create(firstName, lastName) {
  return await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName]);
}

async function read(name, page, pageSize) {
  const offset = (page - 1) * pageSize;

  let query = `
    SELECT p.id, p."firstName" || ' ' || p."lastName" AS passenger, count(*) AS travels
      FROM passengers AS p 
        JOIN travels AS t 
        ON t."passengerId" = p.id`;

  const params = [];

  if (name) {
    params.push(name);

    query += ` WHERE p."firstName" ILIKE '%' || $${params.length} || '%' OR p."lastName" ILIKE '%' || $${params.length} || '%'`;
  }

  params.push(pageSize);
  query += `
    GROUP BY p.id
    ORDER BY travels DESC
    LIMIT $${params.length}`;

  params.push(offset);
  query += ` OFFSET $${params.length};`;

  return await db.query(query, params);
}

export const passengersRepository = { create, read };
