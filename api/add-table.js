import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed', message: `Method ${request.method} not allowed.` });
  }
  try {
    const {name,email,message} = await request.body
    console.log(request.body)
    if (!name || !email || !message) {
      return response.status(400).json({ error: 'Missing required fields: name, email, message' });
    }
    const result = await sql
    `INSERT INTO asad (name, email, message) 
    VALUES (${name}, ${email},${message}) 
    RETURNING *;`;

    return response.status(200).json({ message: 'Data added successfully', result });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  } 
}