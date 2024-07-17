import { sql } from "@vercel/postgres";

export default async function(req, res){
  try {
    const result = await sql `SELECT * FROM asad`
    return res.json(result)
  } catch (error) {
    return res.error
  }
}