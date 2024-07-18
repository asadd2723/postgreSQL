import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed', message: `Method ${request.method} not allowed.` });
  }
  try {
    const {name,email,password} = await request.body
    console.log(request.body)
    if (!name || !email || !password) {
      return response.status(400).json({ error: 'Missing required fields: name, email, password' });
    }
    //check email which already added in database

    const checkEmail = await sql `
      SELECT * FROM users WHERE email = ${email};
    `;
    if (checkEmail.rowCount>0){
      return response.status(409).json({ error: 'User with this email already exists' });
    }
    const result = await sql
    `INSERT INTO users (name, email, password) 
    VALUES (${name}, ${email},${password}) 
    RETURNING *;`;

    return response.status(200).json({ message: 'Data added successfully', data: result.rows });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  } 
}