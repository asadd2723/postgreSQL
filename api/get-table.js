import { sql } from "@vercel/postgres";
import bcrypt from 'bcrypt'

export default async function(request, response){
  if(request.method !== "POST"){
    return response.status(405).json({ error: 'Method Not Allowed', message: `Method ${request.method} not allowed.` });
  }
  try {
    const {email, password} = request.body
    if ( !email || !password ) {
      return response.status(400).json({ error: 'Missing required fields: Email, Password' });
    }
     // Check if the user exists
    const result = await sql`
     SELECT * FROM users WHERE email = ${email};
   `;

    if (result.rowCount === 0) {
     return response.status(401).json({ error: 'Email is not registered. Please SignUp!' });
    }
    const user = result.rows[0];

    console.log(user)

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);

    if (!isPasswordValid) {
      return response.status(401).json({ error: 'Incorrect password, Please try again' });
    }

    return response.status(200).json({ message: 'Login successful', user: { name: user.name, email: user.email } });
  
  } catch (error) {
    console.error('Error processing request:', error);
    return response.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}