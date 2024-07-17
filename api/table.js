import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    const result = await sql`CREATE TABLE asad (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT);`;
    return response.status(200).json({ message: 'Table created successfully', result });
  } 
  catch (error) {
    return response.status(500).json({ error: error.message });
  }
}