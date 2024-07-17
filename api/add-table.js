import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const {name,email,message} = request.body
    const result = await sql
    `INSERT INTO asad (name, email, message) 
    VALUES (${name}, ${email},${message}) 
    RETURNING *;`;

    return response.status(200).json({ message: 'Data added successfully', result });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  } 
}